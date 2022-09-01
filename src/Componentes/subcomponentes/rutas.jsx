
import React, { Component, Fragment } from 'react';
import { Disclosure, Transition, Dialog } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
// import MyDialog from './ModalRutas';
class Rutas extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }
    openModal = () => {
        this.setState({ isOpen: true });
    }
    closeModal = () => { this.setState({ isOpen: false }) }
    modal() {
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
                                    <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 text-center"
                                        >
                                            Carecteristicas esenciales
                                        </Dialog.Title>
                                        <div className="grid grid-rows-4 gap-5">
                                            <div className="row-span-3">
                                                <div className="grid grid-cols-2 gap-5 ">
                                                    <div className="col-span-1 self-center border-2 border-red-500">

                                                        <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7969.383616014137!2d-79.01740074253739!3d-2.904815722292395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1661976973336!5m2!1ses!2sec" width="600" height="450" className='border-none' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                                    </div>
                                                    <div className="col-span-1 self-center border-2 border-red-500">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi ante, accumsan sit amet dolor id, vehicula porta lorem. In fringilla a eros quis tincidunt. Sed sed ex eros. Sed scelerisque nibh ut libero molestie, ut blandit neque molestie. In hac habitasse platea dictumst. Morbi sit amet euismod dolor. Vivamus mollis vestibulum volutpat. Proin pulvinar nisi eu dolor porttitor, id dignissim orci tristique. Praesent eget dictum velit. Cras ornare nibh id lorem pharetra imperdiet. Mauris venenatis dapibus fringilla. Suspendisse nec felis nulla.
                                                        </p>
                                                    </div>
                                                </div>
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

    Equipación() {
        return (
            <Disclosure>

                {({ open }) => (
                    <>
                        <Disclosure.Button className=" cta border-2">
                            
                            <div className='hover-underline-animation'><p className='text-xl font-semibold'>Indumentaria para esta ruta</p></div>
                            
                            
                        </Disclosure.Button>

                        <Transition
                            show={open}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >

                            <Disclosure.Panel className="text-gray-500 p-5 text-xl">
                                Yes! You can purchase a license that you can share with your entire
                                team.
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}

            </Disclosure>
        )
    }

    render() {
        return (
            <div className='grid grid-rows-2 gap-8 p-10 rounded-b-2xl'>
                <div className='row-span-2 pt-4 text-center '>
                    <h1 className="text-6xl tracking-tight  text-white">Conoce nuestras rutas</h1>
                </div>
                <div className='row-span-4'>
                    <div className="grid grid-cols-6 gap-8 px-10 pb-10">


                        {/* //* Ruta 10km -------------------------------------------------------------------------------------------------------------------------- */}

                        <div className="p-10 col-span-2 bg-white/50 rounded-2xl text-center">
                            <div className="grid grid-rows-6 bg-gray-200 rounded-md pb-10 group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <div className='row-span-5'>
                                    <div htmlFor="ruta10" className="p-4 w-full bg-gray-200 rounded-md">
                                        <img
                                            src='../imagenes/rutas/ruta10km.png'
                                            alt="Ruta10KM"
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                        <div className='p-5'>
                                            <h3 className='text-4xl tracking-normal  text-dark-blue'>"Escalera al cielo"</h3>
                                            {/* <h4 className='text-3xl tracking-normal font-semibold text-dark-blue'>"Rob D"</h4> */}
                                            <h5 className='text-2xl tracking-normal  text-dark-blue'>Distancia: 10Km</h5>
                                            <h5 className='text-xl tracking-normal  text-dark-blue'>Altura: +1050m</h5>
                                            <br />
                                            <p className='text-justify text-lg '>Una ruta de puro sendero en casi su totalidad, con intensidad de principio a fin, disfrutando de un lado el valle y del otro la ciudad de Cuenca, dedicada en honor a Roberto Su&aacute;rez Serrano andinista fallecido en agosto 2022 y a todos aquellos que han perdido la vida en las monta&ntilde;as.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="row-span-1">
                                    {this.Equipación()}
                                </div>
                                <div className="row-span-1">
                                    <button id="ruta10" className="bg-second-color hover:bg-second-color/80 text-white  py-2 px-4 rounded" onClick={this.openModal}>
                                        Conoce m&aacute;s sobre esta ruta
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        {/* //* ------------------------------------------------------------------------------------------------------------------------------------ */}

                        {/* //* Ruta 21km -------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="text-center p-10 bg-white/50 rounded-2xl col-span-2 ">
                            <div className="grid grid-rows-6 bg-gray-200 rounded-md pb-10 group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <div className='row-span-5'>
                                    <div className="self-center p-4 w-full min-h-80 bg-gray-200  rounded-md overflow-hidden">
                                        <img
                                            src='../imagenes/rutas/ruta21km.png'
                                            alt="Ruta21KM"
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                        <div className='p-5 mb-[55px]'>
                                            <h3 className='text-4xl tracking-normal  text-dark-blue'>"Casa del &Aacute;rbol"</h3>
                                            <h5 className='text-2xl tracking-normal  text-dark-blue'>Distancia: 21Km</h5>
                                            <h5 className='text-xl tracking-normal  text-dark-blue'>Altura: +1370m</h5>
                                            <br />
                                            <p className='text-justify text-xl '>Una media marat&oacute;n donde el atractivo son sus senderos y conexiones alrededor de las monta&ntilde;as disfrutando de las vistas de la ciudad y la naturaleza por el sendero que te lleva a la casa del &aacute;rbol.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='row-span-1'>
                                    {this.Equipación()}
                                </div>
                                <div className='row-span-1'>
                                    <button id="ruta10" className="bg-second-color hover:bg-second-color/80 text-white py-2 px-4 rounded" onClick={this.openModal}>
                                        Conoce m&aacute;s sobre esta ruta
                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* //* ------------------------------------------------------------------------------------------------------------------------------------ */}

                        {/* //* Ruta 34km -------------------------------------------------------------------------------------------------------------------------- */}
                        <div className="text-center p-10 bg-white/50 rounded-2xl col-span-2">
                            <div className="grid grid-rows-6 bg-gray-200 rounded-md pb-10 group-hover:opacity-75 lg:h-80 lg:aspect-none border-4 transition-borderCard ease-cube hover:border-4 hover:border-second-color  duration-borderCube">
                                <div className="row-span-5 ">
                                    <div className="p-4 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                                        <img
                                            src='../imagenes/rutas/ruta34km.png'
                                            alt="Ruta34KM"
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                        <div className='p-5 mb-7'>
                                            <h3 className='text-4xl tracking-normal  text-dark-blue'>"Boca de Pez"</h3>
                                            {/* <h4 className='text-2xl tracking-normal font-semibold text-dark-blue'>"Rob D"</h4> */}
                                            <h5 className='text-2xl tracking-normal  text-dark-blue'>Distancia: 34Km</h5>
                                            <h5 className='text-xl tracking-normal  text-dark-blue'>Altura: +2300m</h5>
                                            <br />
                                            <p className='text-justify text-xl '>Inspirada en la primera carrera del nacimiento del trail running en Francia en 1904. Es una ruta de combinaci&oacute;n de km verticales donde se disfruta desde pavimiento, hasta el sendero m&aacute;s t&eacute;cnico y pasa por todas las rutas del evento.</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="row-span-1 ">
                                    {this.Equipación()}
                                </div>
                                <div className="row-span-1 ">
                                    <button id="ruta10" className="bg-second-color hover:bg-second-color/80 text-white  py-2 px-4 rounded" onClick={this.openModal}>
                                        Conoce m&aacute;s sobre esta ruta
                                    </button>
                                </div>


                            </div>

                            {this.modal()}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Rutas;
