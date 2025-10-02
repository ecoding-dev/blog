---
title: 'Introducción al flujo de trabajo en GitHub'
description: 'Guía completa sobre el flujo de GitHub, diferencias entre Git y GitHub, ramas, confirmaciones, incidencias, solicitudes de cambios, etiquetas, acciones, bifurcaciones, y GitHub Pages.'
pubDate: 'Oct 01 2025'
heroImage: '../../assets/images/github.jpg'
tags: ['github', 'git', 'flujo de trabajo', 'colaboración', 'devops']
category: 'Desarrollo'
author: 'fabrizio'
---

## El flujo de GitHub

Además de ser una plataforma de desarrollo de software colaborativo, GitHub ofrece también un flujo de trabajo diseñado para optimizar el uso de sus diversas características. Aunque esta unidad ofrece una visión general de los componentes importantes de la plataforma, se recomienda que primero revise [Descripción del flujo de GitHub](https://guides.github.com/introduction/flow/).

## Git y GitHub

Cuando trabaje con **Git** y **GitHub**, es posible que se pregunte en qué se diferencian.

**Git** es un sistema de control de versiones distribuido (DVCS) que permite que varios desarrolladores trabajen en un proyecto. Algunas de sus características clave:

- Se instala y se usa en el equipo local.
- Se ocupa del control de versiones.
- Admite la creación de ramas.

Más info en [Uso de comandos comunes de Git](https://docs.github.com/en/free-pro-team@latest/github/using-git/using-common-git-commands).

**GitHub** es una plataforma en la nube que usa Git como tecnología principal. Simplifica la colaboración y actúa como el "repositorio remoto".  
Entre sus características clave están:

- Issues
- Debates
- Pull Requests
- Notificaciones
- Etiquetas
- Acciones
- Forks
- Proyectos

Más info en [Introducción a GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github).

## Incidencias

Las **incidencias** son el principal canal de comunicación entre usuarios y desarrolladores. Pueden servir para reportar errores, solicitar nuevas funcionalidades o aclarar documentación.  
Se pueden asignar a propietarios, etiquetas, proyectos e hitos, y asociar con pull requests para mejorar la trazabilidad.

![Incidencia en GitHub](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-issue.png)

Más info: [Dominio de las incidencias](https://guides.github.com/features/issues/).

## Notificaciones

GitHub permite configurar **notificaciones** para casi cualquier evento. Puede suscribirse a incidencias, repositorios o menciones, y elegir recibirlas por email, web o dispositivo móvil.

![Panel de notificaciones](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-notifications.png)

Más info en [Configuración de notificaciones](https://help.github.com/github/managing-subscriptions-and-notifications-on-github/configuring-notifications).

## Ramas

Las **ramas** son la manera recomendada de trabajar en paralelo dentro del [flujo de GitHub](https://guides.github.com/introduction/flow/).  
Permiten aislar cambios, mantener estable la rama `main` y luego integrar mediante pull requests.

![Flujo de ramas](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-branching.png)

Más info en [Acerca de las ramas](https://help.github.com/github/collaborating-with-issues-and-pull-requests/about-branches).

## Confirmaciones

Una **confirmación** es un cambio registrado en uno o varios archivos. Cada commit tiene un identificador único, fecha y autor, lo que asegura trazabilidad.

![Lista de confirmaciones](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-commits.png)

Más info en [Confirmación y revisión de cambios](https://help.github.com/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project).

## Solicitudes de incorporación de cambios (Pull Requests)

Una **pull request** sirve para proponer que los cambios de una rama se integren en otra. Permite revisiones, comentarios y aprobación antes de la fusión.

![Ejemplo de pull request](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-pull-request.png)

Más info en [Acerca de las solicitudes de incorporación de cambios](https://help.github.com/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Etiquetas

Las **etiquetas** ayudan a clasificar incidencias y pull requests. GitHub proporciona algunas por defecto y se pueden crear nuevas según las necesidades.

Ejemplos: `bug`, `duplicate`, `help-wanted`, `enhancement`, `question`.

![Etiquetas de GitHub](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-labels.png)

Más info en [Acerca de las etiquetas](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/about-labels).

## Acciones

Las **acciones de GitHub** permiten la automatización y la CI/CD. Se basan en:

- **Workflows** (flujos de trabajo)
- **Eventos**
- **Jobs** (trabajos)
- **Steps** (pasos)
- **Actions** (acciones)
- **Runners** (ejecutores)

![Acciones de GitHub](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-actions.png)

Más info en [Introducción a Acciones de GitHub](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions).

## Clonación y bifurcación

Formas de copiar un repositorio:

- **Clonar**: descarga el repo y su historial al equipo local.
- **Bifurcar**: crea una copia en tu cuenta de GitHub, que luego puedes clonar.

![Flujo fork y clone](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-fork-clone.png)

Posteriormente, puedes enviar cambios a tu fork y luego crear un pull request hacia el repositorio original.

![Flujo fork y pull request](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-fork-pullrequest.png)

Más info en [Bifurcar un repositorio](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

## GitHub Pages

**GitHub Pages** permite hospedar sitios estáticos directamente desde un repositorio.

![GitHub Pages](https://learn.microsoft.com/es-mx/training/github/introduction-to-github/media/2-github-pages.png)

Más info en [GitHub Pages](https://pages.github.com/).
