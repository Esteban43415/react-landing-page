
import React, { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react'
import { App } from './visualizadorPDF';
import { useTranslation } from "react-i18next";



// var inforutas = {
//     "RutaA": {
//         "Nombre": "Escalera al Cielo 'ROB D'",
//         "Distancia": 10,
//         "Descripcion": "10.10km conformados por un 99% de sendero, mantiene partes técnicas y abiertas, cruces de riachuelos y zonas de bosque y pajonal, con desnivel positivo 1050m y negativo 1050m, tiene una intensidad moderada y su dificultad es media, punto más alto 3800m, punto más bajo 2700m, hora de salida 9am el sábado 29 de Octubre del 2022, lugar de salida y llegada km 2 vía barabón (Cuenca – Ecuador) tiempo límite 4 horas",
//         "PuntosControl": [{
//             "Nombre": "PC 1",
//             "Descripcion": "km 5 fin de ascenso pico Km vertical"
//         }],
//         "PuntosAbasto": [{
//             "Nombre": "PA 1 - PA 2",
//             "Descripcion": "km 4 y km 6 sector parqueadero pico de pez."
//         }],
//         "imagen": "../imagenes/rutas/Altimetria/Alt10km.png"
//     },
//     "RutaB": {
//         "Nombre": "Casa de Árbol",
//         "Distancia": 21,
//         "Descripcion": "20.20km conformados por un 85% de sendero 12% de lastre 3% de pavimento, matiene partes técnicas y abiertas, cruces de riachuelos y zonas de bosque y pajonal, con desnivel positivo 1370m y negativo 1370m, tiene una intensidad moderada y su dificultad es media, punto más alto 3800m, punto más bajo 2700m, hora de salida 7am el sábado 29 de Octubre del 2022, lugar de salida y llegada km 2 vía de barabón (Cuenca – Ecuador) tiempo límite 8 horas.",
//         "PuntosControl": [{
//             "Nombre": "PC 1",
//             "Descripcion": "Km 5 a la salida del sendero sector iglesia"
//         }],
//         "PuntosAbasto": [{
//             "Nombre": "PA 1 - PA 3",
//             "Descripcion": "Km 9 – km 16 sector parqueadero pico de pez"
//         },
//         {
//             "Nombre": "PA 2",
//             "Descripcion": "Km 12 cumbre boca de pez"
//         }
//         ],
//         "imagen": "../imagenes/rutas/Altimetria/Alt21km.png"
//     },
//     "RutaC": {
//         "Nombre": "Boca de Pez",
//         "Distancia": 34,
//         "Descripcion": "33.30km conformados por un 75% de sendero 15% de lastre 5% de pavimento, mantiene partes técnicas y abiertas, cruces de riachuelos y zonas de bosque y pajonal, con desnivel positivo 2300m y negativo 2300m, tiene una intensidad moderada y su dificultad es media – alta, punto más alto 3800m, punto más bajo 2700m, hora de salida 4h30am el sábado 29 de Octubre del 2022, lugar y llegada km 2 vía barabón (Cuenca – Ecuador) tiempo límite 10 horas.",
//         "PuntosControl": [{
//             "Nombre": "PC 1",
//             "Descripcion": "Km 7.5 Cumbre final del kilómetro vertical"
//         },
//         {
//             "Nombre": "PC 2",
//             "Descripcion": "Km 9.2 Final del kilómetro vertical antiguo"
//         }
//         ],
//         "PuntosAbasto": [{
//             "Nombre": "PA 1",
//             "Descripcion": "Km 11.5 Cumbre boca de pez"
//         },
//         {
//             "Nombre": "PA 2 - PA 4",
//             "Descripcion": "Km 15 y km 29 sector parqueadero pico de pez"
//         },
//         {
//             "Nombre": "PA 3",
//             "Descripcion": "Km 25 a la salida del sendero sector iglesia"
//         }
//         ],
//         "imagen": "../imagenes/rutas/Altimetria/Alt34km.png"
//     }
// }

function Rutas() {

    var [isOpen, setIsOpen] = useState(false);
    var [isOpenG, setIsOpenG] = useState(false);
    var [isOpenR, setIsOpenR] = useState(false);
    var [titulo, setTitulo] = useState("Reglamento");
    var [url] = useState('/extras/reglamento2023.pdf');
    var [ruta, setRuta] = useState('RutaA');
    var [gpx, setGpx] = useState(0);
    const [t] = useTranslation("global");
    var rutasGPX = ["https://www.google.com/maps/d/u/7/embed?mid=10oZLpoxpqZ6UKtuTclkAM-Od-KN1yW8&ehbc=2E312F", //Ruta 34Km
                    "https://www.google.com/maps/d/u/7/embed?mid=1YCf-6btccoHG2W9JQWEqO__fSVKfQMU&ehbc=2E312F", //Ruta 21Km
                    "https://www.google.com/maps/d/u/7/embed?mid=17cFr5f5eO8Bzpmzv8lYMaTyWp4Mc8cw&ehbc=2E312F"] //Ruta 10Km

    function modal() {

        var NombreRuta = t("Rutas." + ruta + ".Nombre");
        var Distancia = t("Rutas." + ruta + ".Distancia");
        var Descripcion = t("Rutas." + ruta + ".Descripcion");
        // var PuntosControl = t("Rutas." + ruta + ".PuntosControl", { returnObjects: true }).map((PC) => {
        //     return (
        //         <>
        //             <div className="col-span-3 grid grid-cols-3 gap-3 border-solid border-b-[1px]  border-gray-500/40 py-5 pc:px-5">
        //                 <div className="col-span-1 text-center tab:col-span-3 mob:col-span-3 xmob:col-span-3">
        //                     <div className='flex flex-row'>
        //                         <img className='w-[25px]' src='/imagenes/correr.gif' alt="correr" /> <p className="pc:px-5 font-semibold"> {PC.Nombre}</p>
        //                     </div>
        //                 </div>
        //                 <div className="col-span-2 text-left tab:col-span-3 mob:col-span-3 xmob:col-span-3">
        //                     <p className="">{PC.Descripcion}</p>
        //                 </div>
        //             </div>
        //         </>
        //     )
        // });
        // var PuntosAbasto = t("Rutas." + ruta + ".PuntosAbasto", { returnObjects: true }).map((PA) => {
        //     return (
        //         <>
        //             <div className="col-span-3 grid grid-cols-3 gap-3 border-solid border-b-[1px]  border-gray-500/40 py-5 pc:px-5">
        //                 <div className="col-span-1 text-center tab:col-span-3 mob:col-span-3 xmob:col-span-3 ">
        //                     <div className='flex flex-row'>
        //                         <img className='w-[25px] ' src='/imagenes/correr.gif' alt="correr" /> <p className="pc:px-5 font-semibold"> {PA.Nombre}</p>
        //                     </div>
        //                 </div>
        //                 <div className="col-span-2 text-left tab:col-span-3 mob:col-span-3 xmob:col-span-3">
        //                     <p className="">{PA.Descripcion}</p>
        //                 </div>
        //             </div>
        //         </>)
        // });
        var imagen = t("Rutas." + ruta + ".imagen");

        return (
            <>

                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
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

                        <div className="fixed inset-0 overflow-y-auto font-roboto">
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
                                            className="border-b-4 border-dotted border-gray-500 text-5xl font-semibold tab:text-2xl mob:text-2xl xmob:text-2xl leading-6 text-gray-900 text-center pb-8"
                                        >
                                            {NombreRuta} - {Distancia}km 
                                        </Dialog.Title>
                                        <div className="grid grid-rows-4 gap-5 ">
                                            <div className="row-span-4 border-b-4 border-dotted border-gray-500 py-10">
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
                                                        {/* <div className='grid grid-cols-3 gap-0 text-xl py-10 pc:pl-5'>{PuntosControl}{PuntosAbasto}</div> */}

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row-span-1">
                                                <div className="grid grid-cols-4 gap-0 pc:p-10">
                                                    <div className="col-span-4 pc:p-6 border-solid border-b-[1px] border-gray-500/40 tab:py-5 mob:py-5 xmob:py-5">
                                                        <h3 className='text-2xl text-center font-semibold'>{t("Rutas.pcpa-titulo")}</h3>
                                                        <p className="text-justify text-lg">{t("Rutas.pcpa-descripcion")}</p>
                                                    </div>
                                                    <div className="col-span-2 pc:p-6 tab:col-span-4 mob:col-span-4 xmob:col-span-4 tab:py-5 mob:py-5 xmob:py-5">
                                                        <h3 className='text-2xl text-center font-semibold'>{t("Rutas.pc-titulo")}</h3>
                                                        <p className="text-justify text-lg">
                                                            {t("Rutas.pc-descripcion")}
                                                        </p>
                                                    </div>
                                                    <div className="col-span-2 pc:p-6 tab:col-span-4 mob:col-span-4 xmob:col-span-4 tab:py-5 mob:py-5 xmob:py-5">
                                                        <h3 className='text-2xl text-center font-semibold'>{t("Rutas.pa-titulo")}</h3>
                                                        <p className="text-justify text-lg">{t("Rutas.pa-descripcion")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row-span-1 text-center">
                                                <div className="mt-2">

                                                    <button
                                                        type="button"
                                                        className='relative inline-block m-[15px] py-[15px] px-[30px] text-center text-[18px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                                        onClick={() => setIsOpen(false)}>
                                                        ¡{t("Rutas.btn-dialog")}!
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

    function modalGuia() {
        return (
            <>

                <Transition appear show={isOpenG} as={Fragment}>
                    <Dialog as="div" className="font-roboto relative z-50" onClose={() => setIsOpenG(false)}>
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
                                            className="text-3xl tab:text-2xl mob:text-2xl xmob:text-2xl font-bold leading-6 text-dark-blue text-center"
                                        >
                                            {t("Rutas.titulo-reglamento")}
                                        </Dialog.Title>
                                        
                                        <div className="grid grid-rows-4 gap-5 p-10">
                                            <div className="row-span-4">
                                                <App fileUrl={url} />
                                            </div>
                                            <div className="row-span-1 text-center">


                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className='relative inline-block m-[15px] py-[15px] px-[30px] text-center text-[18px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                                        onClick={() => setIsOpenG(false)}>
                                                        ¡{t("Rutas.btn-dialog")}!
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

    function modalR() {
        return (
            <>

                <Transition appear show={isOpenR} as={Fragment}>
                    <Dialog as="div" className="relative z-50 font-roboto" onClose={() => setIsOpenR(false)}>
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
                                            className="text-4xl tab:text-3xl mob:text-3xl xmob:text-3xl font-bold leading-6 text-gray-900 text-center"
                                        >
                                            {titulo}

                                        </Dialog.Title>
                                        <div className="grid grid-cols-2  px-7 py-10">
                                            {/* <div className="col-span-1 tab:col-span-3 mob:col-span-3 xmob:col-span-3">
                                                <h3 className='py-5 text-3xl text-center font-semibold'>{t('Rutas.desc-modal')}</h3>
                                                <App fileUrl={'/extras/'+ruta+'.pdf'} />
                                                
                                            </div> */}
                                            <div className="col-span-2  pc:border-dotted pc:border-dark-blue text-center tab:col-span-3 mob:col-span-3 xmob:col-span-3 tab:mt-5 mob:mt-5 xmob:mt-5 tab:pt-5 mob:pt-5 xmob:pt-5 tab:border-t-4 mob:border-t-4 xmob:border-t-4 tab:border-dotted mob:border-dotted xmob:border-dotted tab:border-dark-blue mob:border-dark-blue xmob:border-dark-blue">
                                                <h3 className='py-5 text-3xl text-center font-semibold'>{t('Rutas.desc-modal2')}</h3>
                                                <iframe title='Ruta 34Km Boca de Pez' className='h-[480px] w-full' src={rutasGPX[gpx]} ></iframe>
                                                <br />
                                                <a className='cta ' href={"../extras/"+ruta+".gpx"} download={''}>
                                                    <div className='hover-underline-animation'><p className='text-xl font-semibold'>{t("Rutas.btn-modal")}</p></div></a>
                                            </div>
                                        </div>

                                        
                                        <div className="mt-4 text-center">
                                            <button
                                                type="button"
                                                className='relative inline-block m-[15px] py-[15px] px-[30px] text-center text-[18px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                                onClick={() => setIsOpenR(false)}>
                                                ¡{t("Rutas.btn-dialog")}!
                                            </button>
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


    return (
        <div className='grid grid-rows-2 gap-8 p-10 rounded-b-2xl'>
            <div className='row-span-2 pt-4 text-center '>
                <h1 className="text-6xl tracking-tight  text-white">{t("Rutas.titulo")}</h1>
            </div>
            <div className='row-span-4'>
                <div className="grid grid-cols-6 tab:grid-cols-1 mob:grid-cols-1 xmob:grid-cols-1 gap-8 px-10 tab:px-0 mob:px-0 xmob:px-0 pb-10">


                    {/* //* Ruta 10km -------------------------------------------------------------------------------------------------------------------------- */}

                    <div className="p-10 tab:p-5 mob:p-5 xmob:p-5 col-span-2 bg-white/50 rounded-2xl text-center">
                        <div className="grid grid-cols-1 gap-7 h-full  bg-gray-200 rounded-md group-hover:opacity-75  lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                            <div className='col-span-1 self-center p-4  '>
                                <div htmlFor="ruta10" className="flex flex-col items-center w-full bg-gray-200 rounded-md">

                                    <div className='flex justify-center items-center p-2'>

                                        <div className=''>
                                            <img className='w-[175px]' src="../imagenes/itra/itra0.png" alt="ITRA" />
                                        </div>
                                        {/* <div className="col-span-1">
                                            <img className='w-full py-2' src="../imagenes/utmb/20K.png" alt="UTMB" />
                                        </div> */}
                                    </div>
                                    <img
                                        src='../imagenes/rutas/ruta10km.png'
                                        alt="Ruta10KM"
                                        className="object-center object-cover w-[400px]"
                                    />

                                    <div className='px-5 tab:px-2 mob:px-2 xmob:px-2 '>
                                        <h3 className='text-4xl font-semibold tracking-normal  text-dark-blue'>"Escalera al cielo 'Rob D'"</h3>
                                        <br />
                                        <h5 className='text-2xl tracking-normal  text-dark-blue'>{t("Rutas.distancia")}: 5Km</h5>
                                        <h5 className='text-xl tracking-normal  text-dark-blue'>{t("Rutas.altura")}: +1070m</h5>
                                        <br />
                                        <p className='text-justify text-base '>{t("Rutas.ruta10k-desc")}</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-1">
                                <button className='cta ' onClick={() => { setIsOpen(true); setRuta('RutaA') }}>
                                    <div className='hover-underline-animation'><p className='text-xl font-semibold'>{t("Rutas.btn-detalles1")}<br />{t("Rutas.btn-detalles2")}</p></div></button>
                            </div>
                            <div className="col-span-1  self-center pb-5 border-t-4 border-dotted border-dark-blue mx-3">
                                <h4 className='text-lg font-semibold p-4'>{t("Rutas.guia")}</h4>
                                <button
                                    type="button"
                                    className='relative inline-block  py-[5px] px-[30px] text-center text-[25px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                    onClick={() => { setIsOpenR(true); setGpx(2); setRuta('RutaA'); setTitulo(t('Rutas.titulo-modal') +" 5Km 'Escalera al Cielo'") }}>
                                    ¡{t("pdf.btn")}!
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* //* ------------------------------------------------------------------------------------------------------------------------------------ */}

                    {/* //* Ruta 21km -------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="text-center p-10 tab:p-5 mob:p-5 xmob:p-5 bg-white/50 rounded-2xl col-span-2 ">

                        <div className="grid grid-cols-1 gap-7 h-full   bg-gray-200 rounded-md  group-hover:opacity-75  lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                            <div className='col-span-1  p-4'>
                                {/* <button className="tab:pointer-events-none tab:cursor-not-allowed mob:pointer-events-none xmob:cursor-not-allowed" onClick={this.openModal}> */}
                                <div className="self-center flex flex-col items-center w-full min-h-80 bg-gray-200  rounded-md overflow-hidden">

                                    <div className='grid grid-cols-1 gap-1 p-2'>

                                        {/* <div className='col-span-1'>
                                            <img className='w-full' src="../imagenes/itra/itra1.png" alt="ITRA" />
                                        </div> */}
                                        <div className="col-span-1">
                                            <img className='w-[200px] py-2' src="../imagenes/utmb/20K.png" alt="UTMB" />
                                        </div>
                                    </div>
                                    <img
                                        src='../imagenes/rutas/ruta21km.png'
                                        alt="Ruta21KM"
                                        className="w-[400px] h-full object-center object-cover lg:w-full lg:h-full"
                                    />


                                    <div className='px-5 tab:px-2 mob:px-2 xmob:px-2'>
                                        <h3 className='text-4xl tracking-normal font-semibold text-dark-blue py-6'>"Casa del &Aacute;rbol"</h3>
                                        <br />
                                        <h5 className='text-2xl tracking-normal  text-dark-blue'>{t("Rutas.distancia")}: 15Km</h5>
                                        <h5 className='text-xl tracking-normal  text-dark-blue'>{t("Rutas.altura")}: +960m</h5>
                                        <br />
                                        <p className='text-justify text-xl '>{t("Rutas.ruta21k-desc")}</p>
                                    </div>

                                </div>
                                {/* </button> */}
                            </div>

                            <div className="col-span-1">
                                <button className='cta ' onClick={() => { setIsOpen(true); setRuta('RutaB') }}>
                                    <div className='hover-underline-animation'><p className='text-xl font-semibold'>{t("Rutas.btn-detalles1")}<br />{t("Rutas.btn-detalles2")}</p></div></button>
                            </div>
                            <div className="col-span-1 self-center pb-5 border-t-4 border-dotted border-dark-blue mx-3">
                                <h4 className='text-lg font-semibold p-4'>{t("Rutas.guia")}</h4>
                                <button
                                    type="button"
                                    className='relative inline-block  py-[5px] px-[30px] text-center text-[25px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                    onClick={() => { setIsOpenR(true); setGpx(1); setRuta('RutaB'); setTitulo(t('Rutas.titulo-modal') +" 15Km 'Casa del Árbol'") }}>

                                    ¡{t("pdf.btn")}!
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* //* ------------------------------------------------------------------------------------------------------------------------------------ */}

                    {/* //* Ruta 34km -------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="text-center p-10 tab:p-5 mob:p-5 xmob:p-5 bg-white/50 rounded-2xl col-span-2">
                        <div className="grid grid-cols-1 gap-7 h-full bg-gray-200 rounded-md group-hover:opacity-75 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                            <div className="col-span-1 p-4">
                                {/* <button className="tab:pointer-events-none tab:cursor-not-allowed mob:pointer-events-none xmob:cursor-not-allowed" onClick={this.openModal}> */}
                                <div className=" w-full flex flex-col items-center bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">

                                    <div className='grid grid-cols-2 gap-1 p-2 '>

                                        <div className='col-span-1'>
                                            <img className='w-full' src="../imagenes/itra/itra2.png" alt="ITRA" />
                                        </div>
                                        <div className="col-span-1">
                                            <img className='w-full py-2' src="../imagenes/utmb/50K.png" alt="UTMB" />
                                        </div>
                                    </div>
                                    <img
                                        src='../imagenes/rutas/ruta34km.png'
                                        alt="Ruta34KM"
                                        className="w-[400px] h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                    {/* <span className="group-hover:visible rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible z-50 static">
                                                M&aacute;s informaci&oacute;n sobre esta ruta haz click aqu&iacute;
                                            </span> */}
                                    <div className='px-5 tab:px-2 mob:px-2 xmob:px-2'>
                                        <h3 className='text-4xl tracking-normal font-semibold text-dark-blue py-6'>"Boca de Pez"</h3>
                                        <br />
                                        <h5 className='text-2xl tracking-normal  text-dark-blue'>{t("Rutas.distancia")}: 35Km</h5>
                                        <h5 className='text-xl tracking-normal  text-dark-blue'>{t("Rutas.altura")}: +2020m</h5>
                                        <br />
                                        <p className='text-justify text-lg '>{t("Rutas.ruta34k-desc")}</p>
                                    </div>


                                </div>
                                {/* </button> */}
                            </div>
                            <div className="col-span-1">
                                <button className='cta ' onClick={() => { setIsOpen(true); setRuta('RutaC') }}>
                                    <div className='hover-underline-animation'><p className='text-xl font-semibold'>{t("Rutas.btn-detalles1")}<br />{t("Rutas.btn-detalles2")}</p></div></button>
                            </div>
                            <div className="col-span-1 self-center pb-5 border-t-4 border-dotted border-dark-blue mx-3">
                                <h4 className='text-lg font-semibold p-4'>{t("Rutas.guia")}</h4>

                                <button
                                    type="button"
                                    className='relative inline-block  py-[5px] px-[30px] text-center text-[25px] text-[#083d56] bg-transparent cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                                    onClick={() => { setIsOpenR(true); setGpx(0); setRuta('RutaC'); setTitulo(t('Rutas.titulo-modal')+" 35Km 'Boca de Pez'") }}>
                                    ¡{t("pdf.btn")}!
                                </button>
                            </div>


                        </div>

                        {modal()}
                        {modalGuia()}
                        {modalR()}

                    </div>


                </div>

                <div className="grid grid-rows-4 gap-0 ">
                    <div className="row-span-2 self-center text-center border-b-4 border-dotted border-white py-5">
                        <h3 className="text-5xl font-semibold text-white">{t("pdf.titulo")}</h3>
                    </div>
                    <div className="row-span-2 text-center">
                        <button
                            type="button"
                            className='relative inline-block m-[15px] py-[15px] px-[30px] text-center text-[25px] text-[#083d56] bg-white/50 cursor-pointer ease-out duration-500 border-2 border-solid border-[#083d56] rounded-xl shadow-btnA hover:text-white hover:shadow-btnB active:scale-90'
                            onClick={() => {setIsOpenG(true)}}>
                            ¡{t("pdf.btn")}!
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Rutas;
