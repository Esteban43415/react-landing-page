
import { useTranslation } from "react-i18next"

function Patrocinadores() {
    const [t] = useTranslation("global");

    function Auspiciantes() {
        return (
            <>
                <h2 className='text-7xl tab:text-3xl mob:text-3xl xmob:text-3xl text-center text-white col-span-4'>{t("patrocinadores.auspiciantes")}</h2>
                <div className='flex justify-center items-center mt-24'>
                    <div className="flex flex-wrap flex-col justify-center items-center gap-24">

                        <div className="flex flex-wrap justify-center items-center gap-24">
                            <div className="">
                                <img src="../imagenes/auspicios/recurso1.png" alt="" className="object-center  w-full h-full" />
                            </div>
                            <div className="">
                                <img src="../imagenes/auspicios/recurso2.png" alt="" className="object-center  w-full h-full" />
                            </div>
                            <div className="">
                                <img src="../imagenes/auspicios/recurso3.png" alt="" className="w-full h-full object-center object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-wrap max-w-4xl gap-16">
                            <div className="w-[30%] 4sm:w-[80%]">
                                <img src="../imagenes/auspicios/recurso14.png" alt="" className="w-full  object-center " />
                            </div>
                            <div className="w-[20%] 4sm:w-[80%]">
                                <img src="../imagenes/auspicios/recurso4.png" alt="" className="w-full  object-center " />
                            </div>
                            <div className="w-[35%] 4sm:w-[80%]">
                                <img src="../imagenes/auspicios/recurso8.png" alt="" className="w-full  object-center " />
                            </div>
                            <div className="w-[25%] 4sm:w-[80%]">
                                <img src="../imagenes/auspicios/recurso7.png" alt="" className="w-full  object-center " />
                            </div>
                            <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                                <img src="../imagenes/auspicios/recurso6.png" alt="" className="w-full  object-center " />
                            </div>
                            <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                                <img src="../imagenes/auspicios/recurso5.png" alt="" className="w-full  object-center " />
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-center items-center max-w-6xl gap-16">
                            <div className="w-[30%] 4sm:w-[80%]">
                                <img src="../imagenes/auspicios/recurso12.png" alt="" className=" object-center object-cover w-full h-full" />
                            </div>
                            <div className="w-[250px] h-[200px]">
                                <img src="../imagenes/auspicios/CasaFarah.png" alt="" className=" object-center object-cover w-full h-full" />
                            </div>
                            <div className="w-[300px] h-[150px]">
                                <img src="../imagenes/auspicios/gaviota.png" alt="" className=" object-center object-cover w-full h-full" />
                            </div>
                            <div className="w-[250px] h-[200px]">
                                <img src="../imagenes/auspicios/PrintTextil.png" alt="" className=" object-center object-cover w-full h-full" />
                            </div>
                            <div className="w-[250px] h-[200px]">
                                <img src="../imagenes/auspicios/Cofradia.png" alt="" className=" object-center object-cover w-full h-full" />
                            </div>
                            <div className="">
                                <img src="../imagenes/auspicios/recurso13.png" alt="" className=" object-center w-full h-full" />
                            </div>
                            <div className="w-[20%] 4sm:w-[80%]">
                                <img src="../imagenes/auspicios/recurso10.png" alt="" className=" object-center w-full h-full" />
                            </div>
                            <div className="">
                                <img src="../imagenes/auspicios/recurso9.png" alt="" className=" object-center w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // var op = t("beneficios.kit", { returnObjects: true });

    return (
        <>

            <div className='grid grid-cols-4 gap-0 tab:gap-5 mob:gap-5 xmob:gap-5 mob:p-2 xmob:p-2'>
                <div className="col-span-5 text-center text-white">
                    <h3 className="text-6xl mob:text-4xl xmob:text-4xl tracking-tight">{t("patrocinadores.beneficios")}</h3>
                    <br />
                    <p className='text-justify text-3xl mob:text-xl xmob:text-xl px-28 tab:px-16 mob:px-8 xmob:px-8 '>
                        {t("patrocinadores.desc-beneficios")}
                    </p>
                </div>
                <div className="col-span-5 text-center">
                    <div className="grid grid-cols-4 gap-7 tab:grid-cols-1 tab:gap-4 mob:gap-3 xmob:gap-4 mob:grid-cols-1 xmob:grid-cols-1 p-20 tab:p-10 mob:p-5 xmob:p-5 rounded-md text-white  ">
                        <div className='group col-span-2  px-6 self-center '>
                            <div className='border-b-4 border-b-[#94a3b8] transition-borderCard ease-cube hover:border-b-4 hover:border-b-[#8bd03c]  duration-500 '>
                                <a href='https://itra.run/Races/RaceDetails/Boca.De.Pez.Trail.Journey..Boca.de.Pez.35k./2023/86476' target='_blank' rel='noreferrer' >
                                    <img
                                        src='../imagenes/auspicios/itra.png'
                                        alt="itra"
                                        className=" object-center object-cover lg:w-full lg:h-full mb-4"
                                    />
                                </a>
                            </div>
                            <span className="group-hover:visible rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible">
                                {t("patrocinadores.tooltip-itra")}
                            </span>
                        </div>
                        <div className="col-span-2">
                            <p className='text-justify text-2xl tab:text-xl mob:text-xl xmob:text-xl indent-6 '>
                                {t("patrocinadores.desc-itra")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 text-center">
                    <div className="grid grid-cols-4 gap-0 p-20 rounded-md text-white tab:grid-cols-1 tab:gap-4 mob:grid-cols-1 xmob:grid-cols-1 tab:p-10 mob:p-5 xmob:p-5">
                        <div className='group col-span-2 px-6 self-center'>
                            <div className='border-b-4 border-b-[#94a3b8] transition-borderCard ease-cube hover:border-b-4 hover:border-b-[#000d44]  duration-500 tab:mb-5 mob:mb-5 xmob:mb-5'>
                                <a href='https://utmb.world/index-races' target='_blank' rel='noreferrer' >
                                    <img
                                        src='../imagenes/auspicios/utmb.png'
                                        alt="utmb"
                                        className=" object-center object-cover w-full h-full"
                                    />
                                </a>
                            </div>
                            <span className="group-hover:visible rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 p-2 text-center min-w-max invisible">
                                {t("patrocinadores.tooltip-utmb")}
                            </span>
                        </div>
                        <div className="col-span-2 ">
                            <p className='text-justify text-2xl tab:text-xl mob:text-xl xmob:text-xl  indent-6'>
                                {t("patrocinadores.desc-utmb")}
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-5 text-center text-white">
                    <div className="grid grid-cols-4 gap-1 px-12 py-10 tab:px-1 mob:px-1 xmob:px-1 place-content-center tab:gap-y-5 mob:gap-y-5 xmob:gap-y-5">
                        <div className="col-span-4 py-10">
                            <h3 className="text-6xl mob:text-4xl xmob:text-4xl tracking-tight">Itinerario</h3>
                        </div>
                        <div className="col-span-2 tab:pb-7 mob:pb-7 xmob:pb-7 tab:col-span-4 mob:col-span-4 xmob:col-span-4 pc:border-r-4 pc:border-b-4 tab:border-b-4 mob:border-b-4 xmob:border-b-4 border-dotted border-second-color ">
                            <div className="grid grid-cols-1 gap-y-7">
                                <div className="col-span-3">
                                    <h4 className="font-Spongebob text-6xl tab:text-4xl mob:text-4xl xmob:text-4xl">23 Octubre</h4>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-7xl tab:text-5xl mob:text-5xl xmob:text-5xl font-semibold text-second-color">Cerramos inscripciones</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-span-2 tab:col-span-4 mob:col-span-4 xmob:col-span-4  pb-7 border-b-4  border-dotted border-second-color">
                            <div className="grid grid-cols-4 gap-y-7">
                                <div className="col-span-5">
                                    <h4 className="font-Spongebob text-6xl">27 - 28 Octubre</h4>
                                </div>
                                <div className="col-span-4">
                                    <p className="text-4xl font-semibold text-white">Entrega de kits</p>
                                    <img src="../imagenes/auspicios/Monodedo.png" alt="" className="w-full  object-center pc:px-56 tab:px-20 mob:px-20 xmob:px-20" />
                                </div>
                                <div className="col-span-2">
                                    <h4 className="font-Spongebob text-4xl">29 Octubre</h4>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-3xl font-semibold text-white">En la base de la carrera</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 tab:col-span-4 mob:col-span-4 xmob:col-span-4 tab:border-b-4 mob:border-b-4 xmob:border-b-4 pt-7 pc:border-r-4 border-dotted border-second-color">
                            <div className="grid grid-cols-1 gap-y-7">
                                <div className="col-span-3">
                                    <h4 className="font-Spongebob text-6xl">28 Octubre</h4>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-5xl font-semibold text-second-color">Inicio 16:00</p>
                                </div>
                                <div className="col-span-3 pc:px-36 tab:px-20 mob:px-20 xmob:px-20">
                                    <ul className="list-disc list-inside text-left">
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2">Inicio del Camping</li>
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2">Treking al amanecer</li>
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2">Zona privilegiada (carrera)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 tab:col-span-4 mob:col-span-4 xmob:col-span-4 pt-7">
                            <div className="grid grid-cols-4 gap-y-7">
                                <div className="col-span-4">
                                    <h4 className="font-Spongebob text-6xl">29 Octubre</h4>
                                </div>
                                <div className="col-span-2 pl-10 self-center">
                                    <ul className="list-disc list-inside text-left">
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2"><span className="text-second-color">04:30</span><br /> salida ruta 34K</li>
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2"><span className="text-second-color">07:00</span><br /> salida ruta 21K</li>
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2"><span className="text-second-color">09:00</span><br /> salida ruta 10K</li>
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2"><span className="text-second-color">09:30</span><br /> Inicio Feria Aventura Gastronómica</li>
                                    </ul>
                                </div>
                                <div className="col-span-2 pr-10 self-center">
                                    <ul className="list-disc list-inside text-left">
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2"><span className="text-second-color">15:30 - 16:30</span><br /> Premiación</li>
                                        <li className="text-2xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2"><span className="text-second-color">17:00</span><br /> Finalización del evento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-span-5 text-center text-white">
                    <h3 className="text-6xl mob:text-4xl xmob:text-4xl tracking-tight">{t("beneficios.titulo")}</h3>
                </div>
                <div className="col-span-5">
                    <div className="grid grid-cols-3 gap-x-3 gap-y-14 px-32 py-20 tab:px-7 mob:px-7 xmob:px-7">
                        <div className="col-span-3">
                            <h3 className="text-4xl font-semibold text-white text-center">{t("beneficios.titulo2")}</h3>
                            <p className="py-5 text-2xl text-white text-center">{t("beneficios.descripcion2")}</p>
                        </div>
                        <div className="col-span-1 tab:col-span-3 mob:col-span-3 xmob:col-span-3 flex justify-center items-center ">
                            <img src="../imagenes/bolsa.png" alt="" className="w-full  object-center " />
                        </div>
                        <div className="col-span-2 tab:col-span-3 mob:col-span-3 xmob:col-span-3 flex justify-center items-center pl-10 ">
                            <ul className="list-disc list-inside">
                                {op.map((item) => (
                                    <li className="text-3xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2">{item.desc}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-3 border-t-4 border-dotted border-second-color pt-5">
                            <h3 className="text-4xl font-semibold text-white text-center">{t("beneficios.titulo3")}</h3>
                            <p className="py-5 text-2xl text-white text-center">{t("beneficios.descripcion3")}</p>
                        </div>
                        <div className="col-span-1 self-center ">
                            <img src="../imagenes/auspicios/gaviota.png" alt="" className="w-full  object-center" />
                        </div>
                        <div className="col-span-2 self-center pl-10">
                            <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.gaviota')}</p>
                        </div>
                        <div className="col-span-1 self-center">
                            <img src="../imagenes/auspicios/uswe.png" alt="" className="w-full  object-center" />
                        </div>
                        <div className="col-span-2 self-center pl-10">
                            <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.uswe')}</p>
                        </div>
                        <div className="col-span-1 self-center">
                            <img src="../imagenes/auspicios/petzl.png" alt="" className="w-full  object-center" />
                        </div>
                        <div className="col-span-2 self-center pl-10">
                            <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.petzl')}</p>
                        </div>
                        <div className="col-span-1 self-center">
                            <img src="../imagenes/auspicios/Hammer.png" alt="" className="w-full  object-center" />
                        </div>
                        <div className="col-span-2 self-center pl-10">
                            <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.hammer')}</p>
                        </div>
                    </div>
                </div> */}
                <div className="col-span-5 text-center">
                    {Auspiciantes()}
                </div>
            </div>
        </>
    );
}





export default Patrocinadores;