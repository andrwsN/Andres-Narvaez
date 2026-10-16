import './App.css'
import fotoPerfil from './Imagenes/nachelle-nocom-LWVIR87DHPY-unsplash.jpg'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'


function App() {

  const programa = "Analisis y Desarrollo de Software"
  const usuario = {
  nombre: 'Daniel Andres Narvaez Narvaez',
  rol: 'Aprendiz ADSO',
  foto: fotoPerfil,
}
  return (
  <>
  <div className="layout">
    <Encabezado usuario={usuario} />
    <Sidebar usuario={usuario} />
    <main className="contenido">
    <h2>Bievenido al programa de {programa}</h2>
    <Presentacion />
    <section className="tarjetas">
    <Tarjeta 
    icono="⚛️" 
    titulo="React" 
    descripcion="Herramientas de JavaScript para construir interfaces con componentes"
    horas={120}
    destacada={true}
    />
    <Tarjeta 
    icono="⚡" 
    titulo="Vite" 
    descripcion="Herramienta que crea, ejecuta y empaqueta el proyecto"
    horas={60}
    destacada={false}
    />
    <Tarjeta 
    icono="🔍" 
    titulo="Eslint" 
    descripcion="Revisa la calidad del codigo y encuentra errores de sintaxis y estilo"
    horas={20}
    destacada={true}
    />
    </section>
    </main>
    <PiePagina />
  </div>
  </>
  )
}

export default App