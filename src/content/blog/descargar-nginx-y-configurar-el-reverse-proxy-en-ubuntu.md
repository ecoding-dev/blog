---
title: 'Descargar Nginx y configurar el Reverse Proxy en Ubuntu'
description: 'Aprende cómo descargar e instalar Nginx y configurar un Reverse Proxy en Ubuntu con este tutorial paso a paso. ¡Mejora tu infraestructura web!'
pubDate: 'Oct 03 2025'
heroImage: '../../assets/images/nginx.png'
tags: ['Web Development', 'Ubuntu', 'Linux', 'Google Cloud', 'Cloud', 'Backend', 'AWS']
category: 'Tutoriales'
author: 'fabrizio'
authorImage: 'https://ecoding.dev/storage/images/efWuGM876akUe8gx4ZDITfCbv0fnrag8gQcSgs21.jpg'
authorUrl: 'https://ecoding.dev/@f4brizio'
---

### **Paso 1: Actualizar repositorios**

Antes de comenzar, debemos asegurarnos de que los repositorios estén actualizados. Para ello, ejecutamos el siguiente comando en la terminal:

```bash
sudo apt update

```

### **Paso 2: Descargar Nginx**

Una vez que los repositorios están actualizados, podemos proceder a descargar Nginx. Para ello, ejecutamos el siguiente comando en la terminal:

```bash
sudo apt install nginx

```

Este comando descargará e instalará Nginx en nuestro sistema.

### **Nota**

Es importante mencionar que existe una variante de Nginx llamada "nginx-full" que incluye más módulos y características que la versión estándar de Nginx. En particular, la versión "nginx-full" incluye módulos adicionales para la gestión de solicitudes HTTPS (SSL/TLS) y la implementación de algunas características avanzadas como la autenticación básica, el soporte para WebSockets, entre otros.

Para instalar la versión "nginx-full" en Ubuntu, podemos ejecutar el siguiente comando en la terminal:

```bash
sudo apt install nginx-full

```

Es importante tener en cuenta que la versión "nginx-full" requiere más recursos de hardware y memoria que la versión estándar de Nginx, por lo que es importante evaluar cuidadosamente los requerimientos de nuestro proyecto antes de decidir cuál versión de Nginx utilizar. En general, si nuestro proyecto requiere características avanzadas como la gestión de solicitudes HTTPS o la autenticación básica, la versión "nginx-full" puede ser la mejor opción. Por otro lado, si nuestro proyecto requiere un servidor web simple y rápido, la versión estándar de Nginx podría ser suficiente.

### **Paso 3: Configurar el Reverse Proxy**

Una vez que Nginx está instalado, podemos comenzar a configurar el Reverse Proxy. Para ello, necesitamos crear un archivo de configuración en la siguiente ubicación:

```bash
/etc/nginx/sites-available/

```

Podemos utilizar cualquier editor de texto para crear el archivo. Por ejemplo, si queremos crear un archivo llamado "reverse-proxy", podemos utilizar el siguiente comando:

```bash
sudo nano /etc/nginx/sites-available/reverse-proxy

```

Dentro del archivo, podemos utilizar la siguiente plantilla para configurar el Reverse Proxy:

```nginx
server {
   listen 80;
   server_name yourdomain.com;
   location / {
       proxy_pass http://localhost:8080;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
   }
}

```

En esta plantilla, debemos reemplazar "yourdomain.com" con nuestro nombre de dominio real y "[http://localhost:8080](http://localhost:8080/)" con la dirección de la aplicación o servidor que queremos exponer a través del Reverse Proxy.

**Paso 4: Habilitar el archivo de configuración**

Una vez que el archivo de configuración está creado, debemos habilitarlo ejecutando el siguiente comando en la terminal:

```bash
sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/

```

Este comando crea un enlace simbólico en la siguiente ubicación:

```bash
/etc/nginx/sites-enabled/

```

Este enlace simbólico apunta al archivo de configuración que creamos anteriormente en la carpeta "sites-available".

**Paso 5: Reiniciar Nginx**

Finalmente, debemos reiniciar Nginx para aplicar los cambios en la configuración. Para ello, ejecutamos el siguiente comando en la terminal:

```bash
sudo systemctl restart nginx

```

¡Listo! Hemos configurado el Reverse Proxy en Nginx en nuestro sistema Ubuntu. Ahora, cuando ingresamos a nuestro nombre de dominio, Nginx redirigirá la solicitud a la aplicación o servidor especificado en el archivo de configuración.