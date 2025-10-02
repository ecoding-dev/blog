---
title: 'Desplegando n8n en una VM de GCP con Cloudflare Tunnel'
description: 'Aprende a instalar y exponer n8n en una máquina virtual de Google Cloud Platform utilizando Cloudflare Tunnel, sin necesidad de exponer puertos públicamente.'
pubDate: 'Oct 02 2025'
heroImage: '../../assets/images/n8n.jpg'
tags: ['n8n', 'GCP', 'Cloudflare Tunnel', 'Automatización', 'DevOps']
category: 'Tutoriales'
author: 'fabrizio'
authorImage: 'https://ecoding.dev/storage/images/efWuGM876akUe8gx4ZDITfCbv0fnrag8gQcSgs21.jpg'
authorUrl: 'https://ecoding.dev/@f4brizio'
---


En esta guía explico cómo instalar y exponer **n8n** en una **máquina virtual de Google Cloud Platform (GCP)** utilizando **Cloudflare Tunnel**. La idea es mantener la instancia lo más ligera posible, pero asegurando que n8n esté disponible 24/7 en un subdominio seguro detrás de Cloudflare.

## 1. Requisitos previos de infraestructura

Antes de desplegar la VM, hay que considerar algunos puntos:

### 🔹 VPC y red

- Puedes usar la **VPC default** de GCP o crear una nueva.
- La VM necesita **acceso a internet saliente** para instalar dependencias y conectar con Cloudflare.
- No es necesario exponer puertos en el firewall de GCP (Cloudflare Tunnel hace la conexión saliente hacia Cloudflare).

### 🔹 Dirección IP

- **No se necesita IP pública** en la VM, ya que el túnel se encarga de la exposición.
- Si deseas acceder vía SSH sin IAP, entonces sí puedes asignar una IP pública, pero no es obligatorio. Alternativamente puedes usar **Identity-Aware Proxy (IAP)** de GCP para acceder por SSH sin exponer la IP.

### 🔹 Tipo de máquina

- Para entornos pequeños o de pruebas:
    - `e2-micro` (2 vCPU compartidos, 1 GB RAM) puede ser suficiente, pero muy justo.
- Para entornos productivos básicos:
    - `e2-small` o `e2-medium` (2–4 GB RAM) es recomendable, sobre todo si ejecutas flujos más pesados en n8n.
- Disco: **20 GB** estándar es suficiente para SQLite. Si usarás Postgres externo, puedes quedarte con discos pequeños.

### 🔹 Sistema operativo

- Ubuntu 22.04 LTS o superior.
- Paquetes mínimos: `curl`, `build-essential`, `sudo`.



## 2. Preparación de la VM

Al conectarte por SSH, instala Node.js 22.x y utilidades básicas:

```bash
# Instala Node.js 22.x desde NodeSource
curl -fsSL <https://deb.nodesource.com/setup_22.x> | sudo -E bash -
sudo apt-get install -y nodejs build-essential
```

Verifica versiones:

```bash
node -v
# v22.x.x
npm -v
# >= 10.x
```



## 3. Instalación de n8n

Instala n8n globalmente:

```bash
sudo npm install -g n8n
```

> ⚠️ Verás advertencias (npm WARN ERESOLVE overriding peer dependency), pero no afectan el funcionamiento.
>



## 4. Instalación de Cloudflare Tunnel

Descarga e instala `cloudflared`:

```bash
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb -o cloudflared.deb
sudo dpkg -i cloudflared.deb
```



## 5. Configuración del túnel

1. **Autenticar con Cloudflare**:

    ```bash
    sudo cloudflared login
    ```

   Esto abrirá el navegador y te permitirá elegir tu dominio.

2. **Crear túnel** (el nombre es descriptivo, ej. nombre de la VM o del servicio):

    ```bash
    sudo cloudflared tunnel create n8n-prod-vm
    ```

   Esto genera un archivo de credenciales en:

    ```
    /root/.cloudflared/<TUNNEL_ID>.json
    ```

   (ejemplo: `/root/.cloudflared/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.json`)

3. **Archivo de configuración** `/etc/cloudflared/config.yml`:

    ```yaml
    tunnel: <TUNNEL_ID>
    credentials-file: /root/.cloudflared/<TUNNEL_ID>.json
    ingress:
      - hostname: n8n.ecoding.dev
        service: http://localhost:5678
      - service: http_status:404
    ```

4. **Asociar el subdominio**:

    ```bash
    sudo cloudflared tunnel route dns n8n-prod-vm n8n.ecoding.dev
    ```




## 6. Levantar Cloudflare Tunnel como servicio

```bash
sudo cloudflared service install
sudo systemctl enable --now cloudflared
systemctl status cloudflared --no-pager
```



## 7. Configurar n8n

Archivo de entorno `/etc/n8n.env`:

```
N8N_HOST=n8n.ecoding.dev
N8N_PROTOCOL=https
N8N_PORT=5678
WEBHOOK_URL=https://n8n.ecoding.dev/
N8N_EDITOR_BASE_URL=https://n8n.ecoding.dev/
N8N_SECURE_COOKIE=true
N8N_LISTEN_ADDRESS=127.0.0.1
TZ=America/Lima

# Optimización
EXECUTIONS_PROCESS=main
NODE_OPTIONS=--max-old-space-size=512
N8N_DIAGNOSTICS_ENABLED=false
N8N_HIRING_BANNER_ENABLED=false
DB_TYPE=sqlite
DB_SQLITE_VACUUM_ON_STARTUP=true

# Carpeta de datos
N8N_USER_FOLDER=/var/lib/n8n
```

Crear carpeta de datos:

```bash
sudo mkdir -p /var/lib/n8n
sudo chown -R root:root /var/lib/n8n
```



## 8. Crear servicio systemd para n8n

Archivo `/etc/systemd/system/n8n.service`:

```
[Unit]
Description=n8n Automation
After=network.target cloudflared.service

[Service]
Type=simple
User=root
EnvironmentFile=/etc/n8n.env
WorkingDirectory=/var/lib/n8n
ExecStart=/usr/bin/n8n
Restart=always
RestartSec=5
Nice=5
LimitNOFILE=16384

[Install]
WantedBy=multi-user.target
```

Habilitar y arrancar:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now n8n
systemctl status n8n --no-pager
```

Logs:

```bash
sudo journalctl -u n8n -f
```



## 9. Acceder al servicio

Abre en el navegador:

```
https://n8n.ecoding.dev
```

Cloudflare manejará el certificado SSL automáticamente.



## Listo ☁️

- **No es necesario asignar IP pública** a la VM: todo el tráfico va por el túnel saliente.
- **Firewall simplificado**: no hay que abrir puertos en GCP, solo permitir salida a internet.
- **Cloudflare Tunnel protege tu n8n** sin exponerlo directamente.
- El setup funciona con **SQLite** para ambientes pequeños, pero se recomienda **Postgres (Cloud SQL)** en producción.