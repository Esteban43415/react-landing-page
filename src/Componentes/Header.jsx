import React, { Component } from 'react';
import Temporizador from './subcomponentes/Timer';



class Header extends Component {

    render() {



        return (

            <div className='flex justify-center items-center'>
                <header>
                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                            <li><a className="smoothscroll" href="#About">Acerca de</a></li>
                            <li><a className="smoothscroll" href="#Rutas">Rutas</a></li>
                            <li><a className="smoothscroll" href="#Formulario">Inscripciones</a></li>
                        </ul>

                    </nav>
                </header>
                <div className='grid grid-rows-5 text-white'>
                    <div className="row-span-5 place-content-start">
                        <div className="px-56 place-content-center grid grid-cols-2 gap-0  w-full text-center overflow-visible pt-[50px] ">
                            <div className="col-span-1 ">
                                <div className="grid grid-cols-1 gap-0 place-content-center">
                                    <div className="col-span-1 justify-center items-center flex">
                                        <div className="">
                                            <img className='w-[500px]' alt='fondo' src='../imagenes/logo.png' />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className=" col-span-1 self-center ">
                                <Temporizador />
                            </div>
                            <div className="col-span-2">
                                <h1 className="font-Spongebob text-6xl">BOCA DE PEZ</h1>
                                <br />
                                <h3 className='font-Skia text-xl'>LA PRIMERA CARRERA DE TRAIL EN CUENCA CON BENEFICIOS iTRA</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 ">
                        <div id="conSocial">
                            {/* <hr className='separator'/> */}
                            <ul className="social">
                                <li><a rel='noreferrer' href="https://www.facebook.com/profile.php?id=100084407841702" target='_blank' className="fa fa-facebook">&nbsp;</a></li>
                                <li><a rel='noreferrer' href="https://www.instagram.com/boca_de_pez/" target='_blank' className="fa fa-instagram">&nbsp;</a></li>
                                {/* <li><a href="#/bocadepeztrail@gmail.com" className="fa fa-envelope"></a></li> */}
                            </ul>
                            {/* <hr className='separator' /> */}
                        </div>

                    </div>


                </div>
                
            </div>

        );
    }



}

export default Header;
