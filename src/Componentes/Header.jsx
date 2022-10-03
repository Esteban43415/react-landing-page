import React, { Fragment, useState } from 'react';
import Temporizador from './subcomponentes/Timer';
import { Disclosure, Transition, Menu } from '@headlessui/react'
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next"
// var navigation = [
//     { name: 'Inicio', id: 'A', href: '#' },
//     { name: 'Premios', id: 'B', href: '#' },
//     { name: 'Beneficios', id: 'C', href: '#' },
//     { name: 'Rutas', id: 'D', href: '#' }
// ]



function Header() {
    const [t, i18n] = useTranslation("global");
    const [img, setImg] = useState('https://flagcdn.com/w160/ec.png');
    function cambioIdies() {

        i18n.changeLanguage('es');
        setImg('https://flagcdn.com/w160/ec.png');

    }
    function cambioIdien() {

        i18n.changeLanguage('en');
        setImg('https://flagcdn.com/w160/us.png');

    }
    function barraNav() {
        var navigation = t("navegacion", { returnObjects: true });


        return (

            <Disclosure as="nav" className="bg-[#083d56]">
                {({ open }) => (
                    <>

                        <div className="mx-auto max-w-7xl px-2">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className=" flex items-center ">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="md:hidden pc:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                                        to={item.id} spy={true} smooth={true} offset={0} duration={500}>

                                                        {item.name}
                                                    </Link>
                                                </div>


                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex hover:bg-dark-blue/50 hover:rounded-lg justify-center items-center ">
                                            <p className='text-gray-300 font-medium text-lg px-2 py-2'>Idioma</p>
                                            <img
                                                src={img}
                                                width="160"
                                                alt="Idioma"
                                                className='h-8 w-8 rounded-full' />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-3 w-[155px]  origin-top-right rounded-md  bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className='grid grid-cols-4 gap-1 place-content-center px-4'>
                                                        <div className="col-span-1 self-center ">
                                                            <img
                                                                src="https://flagcdn.com/w160/ec.png"
                                                                srcset="https://flagcdn.com/w320/ec.png 2x"
                                                                width="160"
                                                                alt="Ecuador"
                                                                className='h-8 w-8 rounded-full' />
                                                        </div>
                                                        <div className="col-span-3 self-center"><button onClick={() => { cambioIdies() }}
                                                            className=' px-4 py-2 text-lg  text-gray-700'
                                                        >
                                                            Español
                                                        </button></div>

                                                    </div>

                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className='grid grid-cols-4 gap-1 place-content-center px-4'>
                                                        <div className="col-span-1 self-center ">
                                                            <img
                                                                src="https://flagcdn.com/w160/us.png"
                                                                srcset="https://flagcdn.com/w320/us.png 2x"
                                                                width="160"
                                                                className='h-8 w-8 rounded-full'
                                                                alt="Estados Unidos" />
                                                        </div>
                                                        <div className="col-span-3 self-center"><button onClick={() => cambioIdien()}
                                                            className=' px-4 py-2 text-lg  text-gray-700'
                                                        >
                                                            English
                                                        </button></div>

                                                    </div>
                                                )}
                                            </Menu.Item>

                                        </Menu.Items>
                                    </Transition>
                                </Menu>
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
                                                    to={item.id} spy={true} smooth={true} offset={-25} duration={500}>

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





    return (

        <div className='flex justify-center items-center' id="A">
            <header className='md:w-full  pc:w-full'>
                <nav className='fixed md:w-full pc:w-full z-30'>
                    {barraNav()}
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
                                <h1 className="font-Spongebob pc:text-6xl tab:text-6xl mob:text-4xl xmob:text-4xl">{t("header.titulo")}</h1>

                                <br />
                                <h3 className='font-roboto pc:text-xl tab:text-lg mob:text-base xmob:text-base'>{t("header.descripcion")}</h3>
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



// }

export default Header;
