# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Reflexion: props
1.¿Por qué la ruta de la foto cambió de ../Images a ./Images?
Porque 'App.jsx' está en src, y la carpeta 'Imagenes' tambien esta dentro de src, al mismo nivel.

2.¿Qué ventaja tiene enviar un objeto usuario en lugar de tres props separadas?
Evita llenar el código de múltiples props sueltas, haciendo que la transferencia de datos sea más limpia y que si se necesita agregar más información (como el correo o el rol), no se tenga que modificar los componentes intermedios.

3.Si mañana el nombre del usuario llegara desde el backend, ¿en qué archivo tendrías que hacer el cambio y por qué solo en ese?
En App.jsx, porque es el lugar donde se guardan los datos del usuario. Los demás componentes solo se encargan de mostrarlos, ellos solo reciben y muestran lo que App.jsx les pasa.

4.¿Qué es el prop drilling y en qué momento se vuelve un problema?
Es como pasar un paquete de mano en mano por varias personas que no lo necesitan, solo para hacérselo llegar al que está al final de la fila.
Se vuelve un problema cuando la aplicación crece y hay muchos niveles de por medio (5 o 6 capas). Con 2 niveles está bien, pero cuando son muchas capas se vuelve incómodo y difícil de mantener.