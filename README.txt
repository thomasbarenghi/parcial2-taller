La página web está utilizando type="module" en los scripts. Esto permite hacer importaciones y exportaciones entre archivos. Sin embargo, al usar type="module", los scripts necesitan ser ejecutados en un servidor para funcionar correctamente, ENTONCES NO FUNCIONARAN AL EJECUTARSE DESDE EL ARCHIVO.

¿Por qué no funciona al abrir el archivo directamente en el navegador (file://)?

El navegador bloquea ciertos aspectos cuando se carga el archivo directamente desde el sistema de archivos (usando la ruta file://). Se debe a las restricciones de seguridad (CORS).

¿Por qué se usó type="module"?

Usé type="module" en los scripts de JavaScript porque:

- Permite dividir el código en múltiples archivos, permite importar y exportar desde los archivos. 

¿Cómo hacer que funcione?

Para que el proyecto funcione correctamente, es necesario ejecutarlo en un servidor. Yo uso Live Server, la extension de Visual Studio Code.

Pasos para ejecutar el proyecto con Live Server:

1. Abrí la carpeta del proyecto en Visual Studio Code.
2. Instalá la extensión Live Server.
3. Hacé clic derecho en el archivo index.html y seleccioná "Open with Live Server".
4. El navegador abrirá la página y podrás ver el proyecto funcionando correctamente.

