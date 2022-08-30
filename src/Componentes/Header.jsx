import React, { Component } from 'react';



class Header extends Component {

    render() {



        return (

            <div>
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
                <div id="header">
                    <div className="row banner">
                        <br />
                        <div className="banner-text">

                            <h1 className="responsive-headline">PROXIMAMENTE...</h1>
                            <img className='logo' alt='fondo' src='../imagenes/logo.png' />
                            <h1 className="responsive-headline">BOCA DE PEZ</h1>
                            <h3>SE PARTE DE UNA GRAN EXPERIENCIA MUY PRONTO</h3>

                            {/* <img className='flyer' alt='flyer2' src='../imagenes/flyer2.png' /> */}
                        </div>
                    </div>

                </div>
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

        );
    }



}

export default Header;
