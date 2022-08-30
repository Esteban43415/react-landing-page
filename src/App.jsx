
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import About from './Componentes/About';
import Formulario from './Componentes/formulario';



function App() {


  return (
    <div className="App">
      <Header/>
      <div id="About" className="shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl">
        <About />
      </div>
      <div className="py-10"></div>
      <div id="Formulario" className='shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl'>
        <Formulario />
      </div>
      <Footer />

    </div>
  );
}

export default App;
