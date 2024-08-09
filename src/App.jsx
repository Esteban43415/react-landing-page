
import './App.css';
import Header from './Componentes/Header';
// import Footer from './Componentes/Footer';
import About from './Componentes/About';
import Formulario from './Componentes/formulario';
// import { useTranslation } from "react-i18next"

// import Formulario from './Componentes/formulario';



function App() {
  // const [t] = useTranslation("global");


  return (
    <div className="App font-roboto" >
        <Header />
        <div id="About" className="shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl mb-28">
          <About />
        </div>
      {/* <div className="py-7"></div> */}
      {/* <Formulario/> */}
      {/* <Form/> */}
      
      {/* <Footer /> */}


    </div>
  );
}

export default App;
