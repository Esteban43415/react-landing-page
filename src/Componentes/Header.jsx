import React, { Component } from 'react';

class Header extends Component {
    render() {



        return (

            <div>
                <header>
                    {/* <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                            <li><a className="smoothscroll" href="#about">Acerca de</a></li>
                            <li><a className="smoothscroll" href="#resume">Rutas</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Inscripciones</a></li>
                        </ul>

                    </nav> */}
                </header>
                <div id="header">
                    <div className="row banner">
                        <br />
                        <div className="banner-text">

                            <h1 className="responsive-headline">PROXIMAMENTE...</h1>
                            <img className='logo' alt='fondo' src='../imagenes/logo.png' />
                            <h1 className="responsive-headline">BOCA DE PEZ</h1>
                            <h3>SE PARTE DE UNA GRAN EXPERIENCIA MUY PRONTO</h3>
                            <hr />
                            <ul className="social">
                                <li><a href="https://www.facebook.com/profile.php?id=100084407841702" target='_blank' className="fa fa-facebook"></a></li>
                                <li><a href="https://www.instagram.com/boca_de_pez/" target='_blank' className="fa fa-instagram"></a></li>
                                {/* <li><a href="#/bocadepeztrail@gmail.com" className="fa fa-envelope"></a></li> */}
                            </ul>
                            <hr />
                            <img className='flyer' alt='flyer2' src='../imagenes/flyer2.png'/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;
