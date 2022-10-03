
import React, { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react'
import { App } from './visualizadorPDF';
import { useTranslation } from "react-i18next"


export default function Camping() {
    const [t] = useTranslation("global");
    var [isOpenG, setIsOpenG] = useState(false);
    var [url] = useState('/extras/camping.pdf');

    var op = t("camping.servicios", { returnObjects: true });

    function modalGuia() {
        return (
            <>

                <Transition appear show={isOpenG} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={() => setIsOpenG(false)}>
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


    return (<>
        <div className="grid grid-cols-1 gap-3 gap-y-12 py-16 px-20 tab:px-5 mob:px-5 xmob:px-5">
            <div className="col-span-2">
                <h2 className="text-white text-6xl text-center">Camping</h2>
                <br />
                <h3 className='px-20 py-4 text-4xl text-justify tab:text-2xl mob:text-2xl xmob:text-2xl tab:px-5 mob:px-5 xmob:px-5 text-second-color '>{t("camping.descripcion")}:</h3>
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-3 gap-5 gap-y-16">
                    <div className="col-span-1 self-center tab:col-span-3 mob:col-span-3 xmob:col-span-3">
                        <p className="text-7xl text-white font-semibold text-center"><span className="text-9xl text-second-color">28</span> <br /> {t('mes.10')} <br /> <span className="text-7xl text-second-color">16:00</span></p>
                    </div>
                    <div className="col-span-1 tab:col-span-3 mob:col-span-3 xmob:col-span-3 flex justify-center items-center text-justify">

                        <ul className="list-disc list-inside">
                            {op.map((item) => (
                                <li className="text-3xl tab:text-2xl mob:text-2xl xmob:text-2xl font-semibold text-white py-2">{item.desc}</li>
                            ))}
                            </ul>
                    </div>
                    <div className="col-span-1 tab:col-span-3 mob:col-span-3 xmob:col-span-3">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="col-span-1 text-center border-b-4 border-dotted border-second-color">
                                <p className="text-3xl text-white">{t("camping.descripcion2")}</p>
                                <button
                                    type="button"
                                    className='relative 
                                inline-block 
                                m-[15px] py-[15px] px-[30px] 
                                text-center text-[18px] text-white 
                                bg-transparent cursor-pointer ease-out duration-500 
                                border-2 border-solid border-second-color
                                rounded-xl shadow-btnA hover:text-second-color hover:shadow-btnB active:scale-90'
                                    onClick={() => setIsOpenG(true)}>
                                    ¡{t("pdf.btn")}!
                                </button></div>
                            <div className="col-span-1 ">
                                <p className="text-3xl text-white text-center">
                                    {t('camping.descripcion3')}
                                </p>
                                <div className='flex flex-row bg-[#25d366] rounded-xl justify-center items-center my-5 mx-7'>
                                    <img  src='./imagenes/wpp.svg' alt="whatsapp" className="w-20 h-20 rounded-full" />
                                    <a href="https://wa.me/593960601629" className="text-white text-2xl tab:text-xl mob:text-xl xmob:text-xl self-center">{t('camping.desc-wpp')}</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {modalGuia()}
    </>);
}