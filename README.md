# Aplicación Web de Citas para Veterinaria

## Descripción

Esta es una aplicación web que permite a los usuarios registrar citas para llevar a sus mascotas a una veterinaria. Los datos solicitados en el formulario son obligatorios y deben ser validados antes de ser enviados. Las citas se almacenan en el `localStorage` del navegador y los usuarios pueden visualizarlas, eliminarlas y gestionar las citas programadas.

## Características

1. **Formulario de Registro de Citas**:
   - Los usuarios deben ingresar los siguientes datos para agendar una cita:
     - **Nombre de la mascota** (Obligatorio, entre 3 y 15 caracteres).
     - **Nombre del dueño** (Obligatorio, entre 3 y 15 caracteres).
     - **Fecha** de la cita (Obligatoria, no puede ser en el pasado).
     - **Hora** de la cita (Obligatoria, debe estar entre las 12:00 PM y las 9:00 PM).
     - **Síntomas** (Obligatorio, entre 10 y 150 caracteres).

2. **Validación del Formulario**:
   - Todos los campos son **obligatorios** y deben ser validados antes de enviarse.
   - La **fecha** no puede ser en el pasado.
   - La **hora** debe estar entre las 12:00 PM y las 9:00 PM.
   - Los campos de texto deben tener un número de caracteres válido.

3. **Almacenamiento en LocalStorage**:
   - Las citas se almacenan en el **localStorage** para que los datos persistan incluso después de recargar la página.
   - Cada nueva cita se guarda como un objeto con los detalles correspondientes.

4. **Visualización y Gestión de Citas**:
   - Las citas registradas se muestran en una lista.
   - Los usuarios pueden **eliminar citas** de la lista y del **localStorage**.

5. **Diseño Responsivo**:
   - La interfaz es **responsiva**, adaptándose a diferentes tamaños de pantalla (móvil, tablet, desktop).
   - Los campos de entrada, como **fecha** y **hora**, están alineados correctamente con otros campos del formulario.

## Tecnologías Utilizadas

- **React**: Para la creación de la interfaz de usuario.
- **Bootstrap**: Para diseño y maquetación responsiva.
- **localStorage**: Para almacenar y persistir las citas.
- **Validación de formularios**: Mediante `react-hook-form` u otras bibliotecas similares.

## Funcionalidades

- **Formulario de cita** con campos para el nombre de la mascota, nombre del dueño, fecha, hora y síntomas.
- **Validación en tiempo real** de los campos con mensajes de error si la entrada no es válida.
- **Almacenamiento persistente** de citas en el navegador utilizando `localStorage`.
- **Eliminación de citas** tanto de la lista mostrada como del `localStorage`.
