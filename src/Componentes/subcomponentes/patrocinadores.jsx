import React, { Component } from 'react';

class Patrocinadores extends Component {

    render() {
        return (
            <div className='grid grid-cols-4 gap-0  p-10'>
                <div className="col-span-5 text-center text-white">
                    <h1 className="text-6xl tracking-tight">Beneficios</h1>
                    <br />
                    <p className='text-justify text-3xl px-28 '>
                        Es el primer evento en Cuenca que cuenta con puntos para calificar al Ultra Trail Du Mont Blanc (UTMB) y sus carreras anexas, adem&aacute;s 2 de las 3 rutas contar&aacute;n con puntos iTRA.
                    </p>
                </div>
                <div className="col-span-5 text-center ">
                    <div className="grid grid-cols-4 gap-7 p-20 self-center rounded-md text-white  ">
                        <div className='group col-span-2  px-6 self-center'>
                            <div className='border-b-4 border-b-[#94a3b8] transition-borderCard ease-cube hover:border-b-4 hover:border-b-[#8bd03c]  duration-500'>
                                <a href='https://itra.run/Races/RaceDetails/Boca.de.Pez.Trail.Journey.Boca.de.Pez.34k.Boca.de.Pez..Trail.Journey/2022/78365' target='_blank' rel='noreferrer' >
                                    <img
                                        src='../imagenes/auspicios/itra.png'
                                        alt="itra"
                                        className=" object-center object-cover lg:w-full lg:h-full mb-4"
                                    />
                                </a>
                            </div>
                            <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible">
                                M&aacute;s informaci&oacute;n sobre la carrera haz click aqu&iacute;
                            </span>
                        </div>
                        <div className="col-span-2">
                            <p className='text-justify text-2xl  indent-6'>
                                La Asociaci&oacute;n Internacional de Trail Running (iTRA) tiene como objetivo dar voz a los actores del trail running para promover sus s&oacute;lidos valores, su diversidad, la seguridad de los recorridos y prevalecer la salud de los corredores, contribuir al desarrollo del trail running y fomentar el di&aacute;logo con las asociaciones nacionales e internacionales.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 text-center">
                    <div className="grid grid-cols-4 gap-0 p-20 self-center rounded-md text-white ">
                        <div className='group col-span-2 px-6'>
                            <div className='border-b-4 border-b-[#94a3b8] transition-borderCard ease-cube hover:border-b-4 hover:border-b-[#000d44]  duration-500'>
                                <a href='https://utmb.world/utmb-world-series-events' target='_blank' rel='noreferrer' >
                                    <img
                                        src='../imagenes/auspicios/utmb.png'
                                        alt="utmb"
                                        className=" object-center object-cover lg:w-full lg:h-full"
                                    />
                                </a>
                            </div>
                            <span className="group-hover:visible absolute rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible">
                                M&aacute;s informaci&oacute;n sobre este tipo de clasificaci&oacute;n haz click aqu&iacute;
                            </span>
                        </div>
                        <div className="col-span-2 ">
                            <p className='text-justify text-2xl  indent-6'>
                                Ultra Trail Du Mont Blanc (UTMB) es un evento deportivo ubicado entre francia, Suiza e Italia que a lo largo de 19 a&ntilde;os a marcado tendencia internacional, acrecentando la atención de muchos deportistas egendarios en el Trail Running.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patrocinadores;