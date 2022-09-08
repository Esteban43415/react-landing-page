
import React, { Component, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react'
import { App } from './visualizadorPDF';



var inforutas = {
    "RutaA": {
        "Nombre": "Escalera al Cielo 'ROB D'",
        "Distancia": 10,
        "Descripcion": "10.10km conformados por un 99% de sendero, mantiene partes técnicas y abiertas, cruces de riachuelos y zonas de bosque y pajonal, con desnivel positivo 1050m y negativo 1050m, tiene una intensidad moderada y su dificultad es media, punto más alto 3800m, punto más bajo 2700m, hora de salida 9am el sábado 29 de Octubre del 2022, lugar de salida y llegada km 2 vía barabón (Cuenca – Ecuador) tiempo límite 4 horas",
        "PuntosControl": [{
            "Nombre": "PC #1",
            "Descripcion": "km 5 fin de ascenso pico Km vertical"
        }],
        "PuntosAbasto": [{
            "Nombre": "PA #1",
            "Descripcion": "km 4 - Sector parqueaderopico de pez"
        },
        {
            "Nombre": "PA #2",
            "Descripcion": "km 6 - sector parqueadero pico de pez"
        }
        ],
        "imagen": "../imagenes/rutas/Altimetria/Alt10km.png"
    },
    "RutaB": {
        "Nombre": "Casa de Árbol",
        "Distancia": 21,
        "Descripcion": "20.20km conformados por un 85% de sendero 12% de lastre 3% de pavimento, matiene partes técnicas y abiertas, cruces de riachuelos y zonas de bosque y pajonal, con desnivel positivo 1370m y negativo 1370m, tiene una intensidad moderada y su dificultad es media, punto más alto 3800m, punto más bajo 2700m, hora de salida 7am el sábado 29 de Octubre del 2022, lugar de salida y llegada km 2 vía de barabón (Cuenca – Ecuador) tiempo límite 8 horas.",
        "PuntosControl": [{
            "Nombre": "PC #1",
            "Descripcion": "Km 5 a la salida del sendero sector iglesia"
        }],
        "PuntosAbasto": [{
            "Nombre": "PA #1",
            "Descripcion": "Km 9 - sector parqueadero pico de pez"
        },
        {
            "Nombre": "PA #2",
            "Descripcion": "Km 16 - sector parqueadero pico de pez"
        }
        ],
        "imagen": "../imagenes/rutas/Altimetria/Alt21km.png"
    },
    "RutaC": {
        "Nombre": "Boca de Pez",
        "Distancia": 34,
        "Descripcion": "33.30km conformados por un 75% de sendero 15% de lastre 5% de pavimento, mantiene partes técnicas y abiertas, cruces de riachuelos y zonas de bosque y pajonal, con desnivel positivo 2300m y negativo 2300m, tiene una intensidad moderada y su dificultad es media – alta, punto más alto 3800m, punto más bajo 2700m, hora de salida 4h30am el sábado 29 de Octubre del 2022, lugar y llegada km 2 vía barabón (Cuenca – Ecuador) tiempo límite 10 horas.",
        "PuntosControl": [{
            "Nombre": "PC #1",
            "Descripcion": "Km 7.5 Cumbre final del kil&oacute;metro vertical"
        },
        {
            "Nombre": "PC #2",
            "Descripcion": "Km 9.2 Final del kil&oacute;metro vertical antiguo"
        }
        ],
        "PuntosAbasto": [{
            "Nombre": "PA #1",
            "Descripcion": "Km 11.5 Cumbre boca de pez"
        },
        {
            "Nombre": "PA #2",
            "Descripcion": "Km 15 - sector parqueadero pico de pez"
        },
        {
            "Nombre": "PA #3",
            "Descripcion": "Km 25 a la salida del sendero sector iglesia"
        },
        {
            "Nombre": "PA #4",
            "Descripcion": "Km 29 - sector parqueadero pico de pez"
        }
        ],
        "imagen": "../imagenes/rutas/Altimetria/Alt34km.png"
    }
}

class Rutas extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, isOpenG: false, url: '/extras/Sample.pdf', ruta: 'RutaA' };

    }
    openModal = () => {
        this.setState({ isOpen: true });
    }
    closeModal = () => { this.setState({ isOpen: false }) }

    openModalG = () => {
        this.setState({ isOpenG: true });

    }
    closeModalG = () => {
        this.setState({ isOpenG: false })
    }



    modal() {

        var NombreRuta = inforutas[this.state.ruta].Nombre;
        var Distancia = inforutas[this.state.ruta].Distancia;
        var Descripcion = inforutas[this.state.ruta].Descripcion;
        var PuntosControl = inforutas[this.state.ruta].PuntosControl.map((PC) => {
            return (
                <>
                    <div className="col-span-1 text-center">
                        <div className='flex flex-row justify-center items-center'>
                            <img className='w-[25px]' src='/imagenes/correr.gif' alt="correr" /> <p className=" px-5"> {PC.Nombre}</p>
                        </div>
                    </div>
                    <div className="col-span-2 text-left">
                        <p className="">{PC.Descripcion}</p>
                    </div>
                </>
            )
        });
        var PuntosAbasto = inforutas[this.state.ruta].PuntosAbasto.map((PA) => {
            return (
                <>
                    <div className="col-span-1 text-center">
                        <div className='flex flex-row justify-center items-center'>
                            <img className='w-[25px] ' src='/imagenes/correr.gif' alt="correr" /> <p className=" px-5"> {PA.Nombre}</p>
                        </div>
                    </div>
                    <div className="col-span-2 text-left">
                        <p className="">{PA.Descripcion}</p>
                    </div>
                </>)
        });
        var imagen = inforutas[this.state.ruta].imagen;

        return (
            <>

                <Transition appear show={this.state.isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={this.closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-100"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-100"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-16 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-4xl tab:text-xl mob:text-xl xmob:text-xl font-medium leading-6 text-gray-900 text-center pb-8"
                                        >
                                            {NombreRuta} - {Distancia}km
                                        </Dialog.Title>
                                        <div className="grid grid-rows-4 gap-5 ">
                                            <div className="row-span-4">
                                                <div className="grid grid-cols-4 gap-5 tab:grid-cols-1 mob:grid-cols-1 xmob:grid-cols-1">
                                                    <div className="col-span-2 self-center">
                                                        <img
                                                            src={imagen}
                                                            alt="Ruta10KM"
                                                            className="object-center object-cover w-full shadow-2xl rounded-lg"
                                                        />
                                                    </div>
                                                    <div className="col-span-2 self-center ">

                                                        <p className='pc:px-10 text-justify'>{Descripcion}</p>
                                                        <div className='grid grid-cols-3 gap-7 text-xl py-10 '>{PuntosControl} {PuntosAbasto}</div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row-span-1 text-center">
                                                <div className="mt-2">

                                                    <button
                                                        type="button"
                                                        className='relative inline-block m-[15px] py-[15px] px-[30px] text-center text-[18px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                                        onClick={this.closeModal}>
                                                        ¡Entendido!
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        )
    }


    modalGuia() {
        return (
            <>

                <Transition appear show={this.state.isOpenG} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={this.closeModalG}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-100"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-100"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 text-center"
                                        >

                                        </Dialog.Title>
                                        <div className="grid grid-rows-4 gap-5">
                                            <div className="row-span-3">
                                                <App fileUrl={this.state.url} />
                                            </div>
                                            <div className="row-span-1 text-center">
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Tener precauci&oacute;n
                                                    </p>
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={this.closeModalG}>
                                                        ¡Entendido!
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        )
    }

    render() {


        return (
            <div className='grid grid-rows-2 gap-8 p-10 rounded-b-2xl'>
                <div className='row-span-2 pt-4 text-center '>
                    <h1 className="text-6xl tracking-tight  text-white">Conoce nuestras rutas</h1>
                </div>
                <div className='row-span-4'>
                    <div className="grid grid-cols-6 tab:grid-cols-1 mob:grid-cols-1 xmob:grid-cols-1 gap-8 px-10 tab:px-0 mob:px-0 xmob:px-0 pb-10">


                        {/* //* Ruta 10km -------------------------------------------------------------------------------------------------------------------------- */}

                        <div className="p-10 tab:p-5 mob:p-5 xmob:p-5 col-span-2 bg-white/50 rounded-2xl text-center">
                            <div className="grid grid-rows-6 bg-gray-200 rounded-md pb-10 group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <div className='row-span-5 group'>
                                    {/* <button className="tab:pointer-events-none tab:cursor-not-allowed mob:pointer-events-none xmob:cursor-not-allowed" onClick={this.openModal}> */}

                                    <div htmlFor="ruta10" className="p-4 w-full bg-gray-200 rounded-md">
                                        
                                        <div className='relative z-0' >
                                            <img
                                                src='../imagenes/rutas/ruta10km.png'
                                                alt="Ruta10KM"
                                                className="object-center object-cover w-full"
                                            />
                                            <div className='absolute top-0 left-0 p-1'>
                                                <img className='w-32 tab:w-24 mob:w-24 xmob:w-24' src="../imagenes/itra/itra0.png" alt="" />
                                            </div>
                                            <div className="absolute top-1 right-0 ">
                                                <img className='w-32 tab:w-24 mob:w-24 xmob:w-24 py-2' src="../imagenes/utmb/20k.png" alt="" />
                                            </div>
                                        </div>
                                        {/* <span className="group-hover:visible rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible z-50 static">
                                                M&aacute;s informaci&oacute;n sobre esta ruta haz click aqu&iacute;
                                            </span> */}
                                        <div className='p-5 tab:p-2 mob:p-2 xmob:p-2'>
                                            <h3 className='text-4xl tracking-normal  text-dark-blue'>"Escalera al cielo 'Rob D'"</h3>
                                            {/* <h4 className='text-3xl tracking-normal font-semibold text-dark-blue'>"Rob D"</h4> */}
                                            <h5 className='text-2xl tracking-normal  text-dark-blue'>Distancia: 10Km</h5>
                                            <h5 className='text-xl tracking-normal  text-dark-blue'>Altura: +1050m</h5>
                                            <br />
                                            <p className='text-justify text-lg'>Una ruta de puro sendero en casi su totalidad, con intensidad de principio a fin, disfrutando de un lado el valle y del otro la ciudad de Cuenca, dedicada en honor a Roberto Su&aacute;rez Serrano andinista fallecido en agosto 2022 y a todos aquellos que han perdido la vida en las monta&ntilde;as.</p>
                                        </div>

                                    </div>
                                    {/* </button> */}
                                </div>
                                <div className="row-span-1">
                                    {/* <button className='cta' onClick={() => { this.openModalG(); this.setState({ url: '/extras/Sample.pdf' }) }}>
                                        <div className='hover-underline-animation'><p className='text-xl font-semibold'>Conoce la gu&iacute;a del <br /> corredor para esta ruta</p></div></button> */}
                                    <button className='cta' onClick={() => { this.openModal(); this.setState({ ruta: 'RutaA' }) }}>
                                        <div className='hover-underline-animation'><p className='text-xl font-semibold'>Haz click aqu&iacute; para m&aacute;s <br /> detalles t&eacute;cnicos</p></div></button>
                                </div>
                                {/* <div className="row-span-1">
                                    <button id="ruta10" className="pc:hidden bg-second-color hover:bg-second-color/80 text-white  py-2 px-4 rounded" onClick={() => { this.openModal(); this.setState({ url: 'hola' }) }}>
                                        Conoce m&aacute;s sobre esta ruta
                                    </button>
                                </div> */}
                            </div>

                        </div>
                        {/* //* ------------------------------------------------------------------------------------------------------------------------------------ */}

                        {/* //* Ruta 21km -------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="text-center p-10 tab:p-5 mob:p-5 xmob:p-5 bg-white/50 rounded-2xl col-span-2 ">

                            <div className="grid grid-rows-6 bg-gray-200 rounded-md pb-10 group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <div className='row-span-5 group'>
                                    {/* <button className="tab:pointer-events-none tab:cursor-not-allowed mob:pointer-events-none xmob:cursor-not-allowed" onClick={this.openModal}> */}
                                    <div className="self-center p-4 w-full min-h-80 bg-gray-200  rounded-md overflow-hidden">
                                        
                                        <div className='relative z-0' >
                                            <img
                                                src='../imagenes/rutas/ruta21km.png'
                                                alt="Ruta21KM"
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                            />
                                            <div className='absolute top-0 left-0 p-2'>
                                                <img className='w-32 tab:w-24 mob:w-24 xmob:w-24' src="../imagenes/itra/itra1.png" alt="" />
                                            </div>
                                            <div className="absolute top-1 right-0 ">
                                                <img className='w-32 py-2 tab:w-24 mob:w-24 xmob:w-24' src="../imagenes/utmb/20k.png" alt="" />
                                            </div>
                                        </div>
                                        {/* <span className="group-hover:visible rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible z-50 static">
                                                M&aacute;s informaci&oacute;n sobre esta ruta haz click aqu&iacute;
                                            </span> */}
                                        <div className='p-5 mb-[96px] tab:p-2 mob:p-2 xmob:p-2'>
                                            <h3 className='text-4xl tracking-normal  text-dark-blue'>"Casa del &Aacute;rbol"</h3>
                                            <h5 className='text-2xl tracking-normal  text-dark-blue'>Distancia: 21Km</h5>
                                            <h5 className='text-xl tracking-normal  text-dark-blue'>Altura: +1370m</h5>
                                            <br />
                                            <p className='text-justify text-xl '>Una media marat&oacute;n donde el atractivo son sus senderos y conexiones alrededor de las monta&ntilde;as disfrutando de las vistas de la ciudad y la naturaleza por el sendero que te lleva a la casa del &aacute;rbol.</p>
                                        </div>

                                    </div>
                                    {/* </button> */}
                                </div>
                                <div className='row-span-1'>
                                    {/* <button className='cta' onClick={() => { this.openModalG(); this.setState({ url: '/extras/Sample.pdf' }) }}>
                                        <div className='hover-underline-animation'><p className='text-xl font-semibold'>Conoce la gu&iacute;a del <br /> corredor para esta ruta</p></div></button> */}
                                    <button className='cta' onClick={() => { this.openModal(); this.setState({ ruta: 'RutaB' }) }}>
                                        <div className='hover-underline-animation'><p className='text-xl font-semibold'>Haz click aqu&iacute; para m&aacute;s <br /> detalles t&eacute;cnicos</p></div></button>
                                </div>
                                {/* <div className='row-span-1'>
                                    <button id="ruta10" className="pc:hidden bg-second-color hover:bg-second-color/80 text-white py-2 px-4 rounded" onClick={this.openModal}>
                                        Conoce m&aacute;s sobre esta ruta
                                    </button>
                                </div> */}
                            </div>

                        </div>
                        {/* //* ------------------------------------------------------------------------------------------------------------------------------------ */}

                        {/* //* Ruta 34km -------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="text-center p-10 tab:p-5 mob:p-5 xmob:p-5 bg-white/50 rounded-2xl col-span-2">
                            <div className="grid grid-rows-6 bg-gray-200 rounded-md pb-10 group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <div className="row-span-5 group">
                                    {/* <button className="tab:pointer-events-none tab:cursor-not-allowed mob:pointer-events-none xmob:cursor-not-allowed" onClick={this.openModal}> */}
                                    <div className="p-4 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                                        
                                        <div className='relative z-0' >
                                            <img
                                                src='../imagenes/rutas/ruta34km.png'
                                                alt="Ruta34KM"
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                            />
                                            <div className='absolute top-0 left-0 p-2'>
                                                <img className='w-32 tab:w-24 mob:w-24 xmob:w-24' src="../imagenes/itra/itra2.png" alt="" />
                                            </div>
                                            <div className="absolute top-1 right-0 ">
                                                <img className='w-32 tab:w-24 mob:w-24 xmob:w-24 py-2' src="../imagenes/utmb/50k.avif" alt="" />
                                            </div>
                                        </div>
                                        {/* <span className="group-hover:visible rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible z-50 static">
                                                M&aacute;s informaci&oacute;n sobre esta ruta haz click aqu&iacute;
                                            </span> */}
                                        <div className='p-5 mb-[67px] tab:p-2 mob:p-2 xmob:p-2s'>
                                            <h3 className='text-4xl tracking-normal  text-dark-blue'>"Boca de Pez"</h3>
                                            {/* <h4 className='text-2xl tracking-normal font-semibold text-dark-blue'>"Rob D"</h4> */}
                                            <h5 className='text-2xl tracking-normal  text-dark-blue'>Distancia: 34Km</h5>
                                            <h5 className='text-xl tracking-normal  text-dark-blue'>Altura: +2300m</h5>
                                            <br />
                                            <p className='text-justify text-xl '>Inspirada en la primera carrera del nacimiento del trail running en Francia en 1904. Es una ruta de combinaci&oacute;n de km verticales donde se disfruta desde pavimiento, hasta el sendero m&aacute;s t&eacute;cnico y pasa por todas las rutas del evento.</p>
                                        </div>


                                    </div>
                                    {/* </button> */}
                                </div>
                                <div className="row-span-1">
                                    {/* <button className='cta' onClick={() => { this.openModalG(); this.setState({ url: '/extras/Sample.pdf' }) }}>
                                        <div className='hover-underline-animation'><p className='text-xl font-semibold'>Conoce la gu&iacute;a del <br /> corredor para esta ruta</p></div></button> */}
                                    <button className='cta' onClick={() => { this.openModal(); this.setState({ ruta: 'RutaC' }) }}>
                                        <div className='hover-underline-animation'><p className='text-xl font-semibold'>Haz click aqu&iacute; para m&aacute;s <br /> detalles t&eacute;cnicos</p></div></button>
                                </div>
                                {/* <div className="row-span-1 ">
                                    <button id="ruta10" className="pc:hidden bg-second-color hover:bg-second-color/80 text-white  py-2 px-4 rounded" onClick={this.openModal}>
                                        Conoce m&aacute;s sobre esta ruta
                                    </button>
                                </div> */}


                            </div>

                            {this.modal()}
                            {this.modalGuia()}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Rutas;
