
## Características

- **Agregar Tareas**: Permite agregar nuevas tareas a la lista.
- **Marcar como Completadas**: Las tareas pueden marcarse como completadas o reabrirse si es necesario.
- **Eliminar Tareas**: Se pueden eliminar tareas de la lista.
- **Arquitectura Cliente/Servidor**: La aplicación utiliza la arquitectura Cliente/Servidor, donde el servidor maneja la lógica de negocio y el cliente se encarga de la interfaz de usuario.

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express.
- **Base de Datos**: Un archivo JSON simple (`tasks.json`) para almacenar las tareas.

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/todo-list.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd todo-list
    ```

3. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:
    ```bash
    node server/server.js
    ```

2. Abre `client/index.html` en tu navegador para acceder a la aplicación.

## Arquitectura Cliente/Servidor

La aplicación está dividida en dos partes principales:

1. **Servidor**: Está construido usando Node.js y Express. Maneja las solicitudes HTTP para agregar, obtener, actualizar y eliminar tareas. 
    - **Rutas del Servidor**:
        - `GET /tasks`: Obtiene todas las tareas.
        - `POST /tasks`: Agrega una nueva tarea.
        - `PUT /tasks/:id/toggle`: Marca/desmarca una tarea como completada.
        - `DELETE /tasks/:id`: Elimina una tarea.

2. **Cliente**: Implementado con HTML, CSS, y JavaScript para la interacción del usuario. Usa `fetch` para comunicarse con el servidor y manejar la lista de tareas.

## Funcionamiento de la Aplicación

1. **Agregar una Tarea**: El usuario puede agregar una nueva tarea utilizando el formulario. Esta acción envía una solicitud `POST` al servidor.
2. **Marcar/Desmarcar una Tarea**: Se puede marcar una tarea como completada o reabrirla. Esto envía una solicitud `PUT` al servidor.
3. **Eliminar una Tarea**: El usuario puede eliminar una tarea enviando una solicitud `DELETE` al servidor.

## Capturas de Pantalla

![Captura de Lista de Tareas](https://via.placeholder.com/800x400?text=Captura+de+Pantalla)

## Futuras Mejoras

- Agregar autenticación de usuario para manejar listas de tareas individuales.
- Implementar notificaciones para recordar al usuario completar las tareas.
- Añadir categorías o etiquetas a las tareas.

## Contribuir

¡Contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrego nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la MIT License - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en contactarme:

- **Email**: [tu-correo@example.com](mailto:tu-correo@example.com)
- **GitHub**: [tu-usuario](https://github.com/tu-usuario)

---

¡Gracias por visitar este proyecto! 😊
