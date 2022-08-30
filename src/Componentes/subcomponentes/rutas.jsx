import React, { Component } from 'react';

class Rutas extends Component {
    render() {
        return (
            <div className='grid grid-rows-2 gap-8 p-10 rounded-b-2xl'>
                <div className='row-span-2 pt-4 text-center '>
                    <h1 className="text-5xl tracking-tight font-bold text-white">Conoce nuestras rutas</h1>
                </div>
                <div className='row-span-4'>
                    <div className="grid grid-cols-6 gap-8 px-10 pb-10">
                        <div className="p-10 col-span-2 bg-white/50 rounded-2xl text-center ">
                            <div htmlFor="ruta10" className="p-4 w-full bg-gray-200 rounded-md border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <img
                                    src='../imagenes/rutas/ruta10km.png'
                                    alt="Ruta32KM"
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                                <div className='p-5'>
                                    <h3 className='text-3xl tracking-normal font-semibold text-dark-blue'>"Escalera al cielo"</h3>
                                    {/* <h4 className='text-3xl tracking-normal font-semibold text-dark-blue'>"Rob D"</h4> */}
                                    <h5 className='text-xl tracking-normal font-semibold text-dark-blue'>Distancia: 10Km</h5>
                                    <h5 className='text-lg tracking-normal font-semibold text-dark-blue'>Altura: +1050m</h5>
                                    <br />
                                    <p className='text-justify text-base font-semibold'>Una ruta de puro sendero en casi su totalidad, con intensidad de principio a fin, disfrutando de un lado el valle y del otro laciudad de Cuenca, dedicada en honor a Roberto Su&aacute;rez Serrano andinista fallecido en agosto 2022 y a todos aquellos que han perdido la vida en las monta&ntilde;as.</p>
                                </div>
                                <button id="ruta10" class="bg-second-color hover:bg-second-color/80 text-white font-bold py-2 px-4 rounded">
                                    Conoce m&aacute;s sobre esta ruta
                                </button>
                            </div>


                        </div>
                        <div className="text-center p-10 bg-white/50 rounded-2xl col-span-2">
                            <div className="p-4 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <img
                                    src='../imagenes/rutas/ruta21km.png'
                                    alt="Ruta32KM"
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                                <div className='p-5 mb-12'>
                                    <h3 className='text-3xl tracking-normal font-semibold text-dark-blue'>"Casa del &Aacute;rbol"</h3>
                                    <h5 className='text-xl tracking-normal font-semibold text-dark-blue'>Distancia: 21Km</h5>
                                    <h5 className='text-lg tracking-normal font-semibold text-dark-blue'>Altura: +1370m</h5>
                                    <br />
                                    <p className='text-justify text-base font-semibold'>Una media marat&oacute;n donde el atractivo son sus senderos y conexiones alrededor de las monta&ntilde;as disfrutando de las vistas de la ciudad y la naturaleza por el sendero que te lleva a la casa del &aacute;rbol.</p>
                                </div>
                                <button id="ruta10" class="bg-second-color hover:bg-second-color/80 text-white font-bold py-2 px-4 rounded">
                                    Conoce m&aacute;s sobre esta ruta
                                </button>
                            </div>

                        </div>
                        <div className="text-center p-10 bg-white/50 rounded-2xl col-span-2">
                            <div className="p-4 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <img
                                    src='../imagenes/rutas/ruta34km.png'
                                    alt="Ruta32KM"
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                                <div className='p-5 mb-6'>
                                    <h3 className='text-3xl tracking-normal font-semibold text-dark-blue'>"Boca de Pez"</h3>
                                    {/* <h4 className='text-2xl tracking-normal font-semibold text-dark-blue'>"Rob D"</h4> */}
                                    <h5 className='text-xl tracking-normal font-semibold text-dark-blue'>Distancia: 34Km</h5>
                                    <h5 className='text-lg tracking-normal font-semibold text-dark-blue'>Altura: +2300m</h5>
                                    <br />
                                    <p className='text-justify text-base font-semibold'>Inspirada en la primera carrera del nacimiento del trail running en Francia en 1904. Es una ruta de combinaci&oacute;n de km verticales donde se disfruta desde pavimiento, hasta el sendero m&aacute;s t&eacute;cnico y pasa por todas las rutas del evento.</p>
                                </div>
                                <button id="ruta10" class="bg-second-color hover:bg-second-color/80 text-white font-bold py-2 px-4 rounded">
                                    Conoce m&aacute;s sobre esta ruta
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rutas