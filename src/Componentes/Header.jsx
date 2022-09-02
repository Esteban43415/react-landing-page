import React, { Component } from 'react';
import Temporizador from './subcomponentes/Timer';
import { Disclosure, Transition } from '@headlessui/react'
import { Link } from 'react-scroll';
var navigation = [
    { name: 'Inicio', id: 'A', href: '#', current: true },
    { name: 'Premios', id: 'B', href: '#', current: false },
    { name: 'Beneficios', id: 'C', href: '#', current: false },
    { name: 'Rutas', id: 'D', href: '#', current: false },
    { name: 'Inscripciones', id: 'E', href: '#', current: false },
]


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inicio: false,
            premios: false,
            beneficios: false,
            rutas: false,
            inscripciones: false
        }
    }

    barraNav() {
        return (

            <Disclosure as="nav" className="bg-[#083d56] ">
                {({ open }) => (
                    <>

                        <div className="mx-auto max-w-7xl px-2">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className=" flex items-center ">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="md:hidden pc:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>

                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="mob:hidden xmob:hidden flex flex-1 items-center justify-center sm:items-center sm:justify-center">

                                    <div className="sm:ml-6 sm:block">
                                        <div className="flex space-x-4 text-xl">
                                            {navigation.map((item) => (
                                                <div className='hover:bg-dark-blue/50 hover:rounded-lg  py-2'>
                                                    <Link
                                                        className='text-gray-300 font-medium px-2 py-2 '
                                                        activeClass='active'
                                                        to={item.name} spy={true} smooth={true} offset={-25} duration={500}>

                                                        {item.name}
                                                    </Link>
                                                </div>


                                            ))}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >

                            <Disclosure.Panel className="md:hidden pc:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            className=' w-full block px-3 py-2 rounded-md text-base font-medium'
                                        >
                                            <div className='hover:bg-dark-blue/50 hover:rounded-lg px-3 py-2'>
                                                <Link
                                                    className='text-gray-300 font-medium px-2 py-2'
                                                    activeClass='active'
                                                    to={item.name} spy={true} smooth={true} offset={-25} duration={500}>

                                                    {item.name}
                                                </Link>
                                            </div>
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        )
    }

    render() {



        return (

            <div className='flex justify-center items-center' id="Inicio">
                <header className='md:w-full  pc:w-full'>
                    <nav className='fixed md:w-full pc:w-full'>
                        {this.barraNav()}
                    </nav>


                    <div className='grid grid-rows-5 text-white'>
                        <div className="row-span-5 place-content-start">
                            <div className="2xl:px-60 xl:px-0 place-content-center pc:grid pc:grid-cols-2 pc:gap-0 tab:grid tab:grid-cols-1 tab:gap-2  w-full text-center pt-[50px] ">
                                {/* //*---------------------------------------------------------- */}
                                <div className="pc:col-span-1 tab:col-span-2 mob:col-span-2">
                                    <div className="grid grid-cols-1 gap-0 place-content-center">
                                        <div className="col-span-1 justify-center items-center flex">
                                            <div className="">
                                                <img className='w-[500px]' alt='fondo' src='../imagenes/logo.png' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* //*---------------------------------------------------------- */}
                                <div className=" pc:col-span-1 self-center tab:col-span-2 mob:col-span-2">
                                    <Temporizador />
                                </div>
                                {/* //*---------------------------------------------------------- */}
                                <div className="pc:col-span-2 tab:col-span-2 mob:col-span-2">
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
                </header>
            </div>

        );
    }



}

export default Header;
