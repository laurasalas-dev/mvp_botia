# mvp_botia

revision_final
![Logo Botia](./assents/logoBotia.png)

## Descripción del Proyecto

MVP Botia es una aplicación web diseñada para ayudar a empresas y emprendedores a automatizar la gestión de sus servicios y tiendas online. Permite registrar información clave de la empresa, los productos o servicios ofrecidos, y genera un PDF con los datos ingresados en el formulario para tener un respaldo descargable. La aplicación mejora la experiencia de los clientes al brindar un proceso organizado y eficiente, ya sea para reservar servicios o comprar productos en línea.

El proyecto se divide en dos módulos principales: **Servicios**, orientado a negocios que ofrecen servicios como citas, cursos o asesorías; y **E-commerce**, enfocado en tiendas que venden productos en línea. Ambos módulos incluyen formularios interactivos que validan los datos en tiempo real, garantizando que la información ingresada sea completa antes de generar el PDF.



## Requerimientos

Para utilizar el proyecto se requiere un navegador moderno con soporte para JavaScript, conexión a internet para cargar la librería jsPDF, y un editor de código para modificar o desplegar el proyecto. No se necesita un servidor backend, ya que la aplicación funciona completamente en el frontend y utiliza `localStorage` para guardar temporalmente la información del usuario.



## Historias de Usuario

**Historia 1:** Como usuario que ofrece servicios, quiero completar un formulario que registre toda la información relevante de mi empresa y servicios, de manera que pueda organizar mis procesos y disponer de un respaldo en PDF de mis datos.

**Historia 2:** Como parte del equipo de Botia, se requiere que cuando el usuario culmine el formulario, se genere un pdf en donde se hayan redactado las respuestas ingresadas y datos importantes para que el equipo pueda hacer un seguimiento correcto.



## Wireframes

El proyecto se basa en interfaces sencillas y claras. La pantalla inicial permite elegir entre los módulos de Servicios y E-commerce. Cada formulario incluye campos para completar la información del negocio y termina con un botón **Finalizar**, que valida los datos, genera un PDF y redirige a una página final. La interfaz busca ser intuitiva, con una disposición limpia de inputs y selectores, garantizando que los usuarios completen los formularios sin dificultad.

![Wireframe MVP Botia](./assets/wireframe.png)


## Gestión de Commits y Ramas

El proyecto utiliza una estructura de ramas organizada para mantener la versión estable en main. Las ramas de desarrollo (servicios, ecommerce) permiten implementar funcionalidades específicas de cada módulo antes de fusionarlas a main. Los commits siguen una convención clara para reflejar el tipo de cambio: feat: para nuevas funcionalidades, fix: para correcciones, style: para cambios de estilo y docs: para actualizaciones de documentación. Esta metodología asegura trazabilidad y facilita la colaboración futura.



## Tecnologías Usadas

El proyecto fue desarrollado utilizando HTML5, CSS3 y JavaScript (Vanilla JS). Se emplea la librería **jsPDF** para generar los archivos PDF y localStorage para guardar temporalmente los datos ingresados en los formularios.




