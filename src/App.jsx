
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import About from './Componentes/About';
import { useTranslation } from "react-i18next"

// import Formulario from './Componentes/formulario';



function App() {
  const [t] = useTranslation("global");


  return (
    <div className="App font-roboto" >
      <Header />
      <div id="About" className="shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl">
        <About />
      </div>
      <div className="py-7"></div>
      <div className='shadow-info 3sm:mx-0 2sm:mx-0 sm:mx-0 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-2xl '>
        <div id="E" className="grid grid-cols-1 gap-0 bg-blend-multiply bg-[#083d56]/80 pc:px-36 tab:px-4 mob:px-4 xmob:px-4 rounded-xl py-40 ">
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-10 tab:grid-cols-1 mob:grid-cols-1 xmob:grid-cols-1">
              <div className="col-span-2">
                <h3 className="text-5xl text-second-color">{t("promocion.principal")}</h3>
              </div>
              <div className="col-span-1 tab:col-span-2 mob:col-span-2 xmob:col-span-2">
                <div className="grid grid-cols-1 gap-3 place-content-center">
                  <div className="col-span-1">
                    <h3 className="text-4xl font-semibold text-white">{t("sorteo.titulo")}</h3>
                  </div>
                  <div className="col-span-1 flex justify-center items-center">
                    <img src="../imagenes/auspicios/gaviota.png" alt="" className="w-[35%]  object-center " />
                  </div>
                  <div className="col-span-1">
                    <p className="text-2xl text-white">{t('sorteo.descripcion')}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 tab:col-span-2 mob:col-span-2 xmob:col-span-2">
                <div className="grid grid-cols-1 gap-3 gap-y-8 place-content-center">
                  <div className="col-span-1">
                    <h3 className="text-4xl font-semibold text-white">{t("promocion2.titulo")}</h3>
                  </div>
                  <div className="col-span-1 ">
                    <h3 className="text-6xl font-semibold text-second-color">{t("promocion2.descripcion1")}</h3>
                  </div>
                  <div className="col-span-1">
                    <p className="text-2xl text-white">{t("promocion2.descripcion2")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-center p-10 border-b-4 border-dotted border-b-second-color">
            <h3 className='text-5xl tab:text-3xl mob:text-3xl xmob:text-3xl text-second-color'>{t("inscripcion.titulo")}</h3>
          </div>
          <div className="col-span-1 p-10 flex justify-center items-center">
            <div className='flex flex-row tab:flex-col mob:flex-col xmob:flex'>

              <div className="col-span-1 grid grid-cols-2 gap-5">
                <div className="col-span-2 self-center px-28 tab:px-10 mob:px-10 xmob:px-10">
                  <img
                    src='../imagenes/auspicios/meet.png'
                    alt="Ruta34KM"
                    className="w-full h-full object-center " /></div>
                <div className="pt-10 col-span-2  self-center"><h3 className="text-5xl text-second-color font-semibold">{t('promocion.titulo')}</h3></div>
                <div className="col-span-2  self-center"><h4 className='text-3xl text-second-color'>{t('promocion.descripcion1')}</h4></div>
                <div className="col-span-2  self-center"><p className='text-2xl text-second-color'>{t('promocion.descripcion2')} <br /> <span className='text-5xl font-semibold text-white'>{t('promocion.descripcion3')}</span></p></div>
              </div>

              <div className="px-10 tab:py-8 mob:py-8 xmob:py-8 self-center">
                <a className="fancy text-xl tab:text-base mob:text-base xmob:text-base" href="https://www.meet2go.com/ev/bocadepez/">
                  <span className="top-key"></span>
                  <span className="text">{t("inscripcion.btn")}</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
      <Footer />


    </div>
  );
}

export default App;
