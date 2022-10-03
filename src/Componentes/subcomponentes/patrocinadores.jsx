
import { useTranslation } from "react-i18next"

function Patrocinadores() {
    const [t] = useTranslation("global");

    function Auspiciantes() {
        return (
            <>
                <h2 className='text-7xl tab:text-3xl mob:text-3xl xmob:text-3xl text-center text-white col-span-4'>{t("patrocinadores.auspiciantes")}</h2>
                <div className='flex justify-center items-center'>
                    <div className="grid grid-cols-12 gap-7 pc:gap-10  tab:grid-cols-3 mob:grid-cols-3 xmob:grid-cols-3 pc:pt-10 pc:px-20 tab:p-10 mob:p-10 xmob:p-10">

                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/petzl.png" alt="" className="object-center  w-full h-full" />
                        </div>
                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/uswe.png" alt="" className="object-center  w-full h-full" />
                        </div>
                        {/* <div className="col-span-2 tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/mi.png" alt="" className="w-full h-full object-center object-cover" />
                        </div> */}
                        <div className="col-span-2 tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/PrintTextil.png" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/Hammer.png" alt="" className="w-full  object-center " />
                        </div>
                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/Monodedo.png" alt="" className="w-full  object-center " />
                        </div>
                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/gaviota.png" alt="" className="w-full  object-center " />
                        </div>
                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/at.png" alt="" className="w-full  object-center " />
                        </div>
                        <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/CruzRoja.png" alt="" className="w-full  object-center " />
                        </div>
                        {/* <div className="col-span-2 self-center tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/KTM.png" alt="" className="w-full  object-center " />
                        </div> */}
                        <div className="col-span-2 tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/Cofradia.png" alt="" className=" object-center object-cover w-full h-full" />
                        </div>
                        <div className="col-span-2 tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/Turismo.png" alt="" className=" object-center object-cover w-full h-full" /></div>
                        <div className="col-span-2 tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/CasaFarah.png" alt="" className=" object-center object-cover w-full h-full" />
                        </div>
                        <div className="col-span-2 tab:col-span-1 mob:col-span-1 xmob:col-span-1">
                            <img src="../imagenes/auspicios/Marsella.png" alt="" className=" object-center object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
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
                            <a href='https://itra.run/Races/RaceDetails/Boca.de.Pez.Trail.Journey.Boca.de.Pez.34k.Boca.de.Pez..Trail.Journey/2022/78365' target='_blank' rel='noreferrer' >
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
            <div className="col-span-5 text-center text-white">
                <h3 className="text-6xl mob:text-4xl xmob:text-4xl tracking-tight">{t("beneficios.titulo")}</h3>
            </div>
            <div className="col-span-5">
                <div className="grid grid-cols-3 gap-x-3 gap-y-14 px-32 py-20 tab:px-7 mob:px-7 xmob:px-7">
                    <div className="col-span-1 self-center ">
                        <img src="../imagenes/auspicios/gaviota.png" alt="" className="w-full  object-center " />
                    </div>
                    <div className="col-span-2 self-center pl-10">
                        <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.gaviota')}</p>
                    </div>
                    <div className="col-span-1 self-center">
                        <img src="../imagenes/auspicios/uswe.png" alt="" className="w-full  object-center " />
                    </div>
                    <div className="col-span-2 self-center pl-10">
                        <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.uswe')}</p>
                    </div>
                    <div className="col-span-1 self-center">
                        <img src="../imagenes/auspicios/petzl.png" alt="" className="w-full  object-center " />
                    </div>
                    <div className="col-span-2 self-center pl-10">
                        <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.petzl')}</p>
                    </div>
                    <div className="col-span-1 self-center">
                        <img src="../imagenes/auspicios/Hammer.png" alt="" className="w-full  object-center " />
                    </div>
                    <div className="col-span-2 self-center pl-10">
                        <p className="text-3xl text-white text-justify tab:text-xl mob:text-xl xmob:text-xl">{t('beneficios.hammer')}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-5 text-center">
                {Auspiciantes()}
            </div>
        </div>
    );
}





export default Patrocinadores;