
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import About from './Componentes/About';
// import Formulario from './Componentes/formulario';



function App() {


  return (
    <div className="App font-roboto" >
      <Header />
      <div id="About" className="shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl">
        <About />
      </div>
      <div className="py-10"></div>
      {/* <div id="Formulario" className='shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl'>
        <div className="grid grid-cols-1 gap-0 bg-blend-multiply bg-[#083d56]/80 pc:px-36 tab:px-4 mob:px-4 xmob:px-4">
          <div className="col-span-1 text-center p-10 border-b-4 border-dotted border-b-second-color">
            <h3 className='text-6xl tab:text-3xl mob:text-3xl xmob:text-3xl text-second-color'>Para realizar tu inscripción haz click aqu&iacute;</h3>
          </div>
          <div className="col-span-1 p-10 flex justify-center items-center">
            <div className='flex flex-row tab:flex-col mob:flex-col xmob:flex'>
              <div className="p-10">
                <img
                  src='../imagenes/auspicios/meet.png'
                  alt="Ruta34KM"
                  className="w-64 h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="px-10">
                <a className="fancy text-xl tab:text-base mob:text-base xmob:text-base" href="https://www.meet2go.com/">
                  <span className="top-key"></span>
                  <span className="text">Haz click aqu&iacute; </span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />


    </div>
  );
}

export default App;
