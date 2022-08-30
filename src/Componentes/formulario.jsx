import $ from 'jquery';
import React, { Component } from 'react';
import { inscribirUsuario } from '../firebaseJS/datosParticipantes';
import { Tab } from '@headlessui/react'
// import MyModal from './Modal-form';
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://www.universal-tutorial.com/api/countries/",
//     "method": "GET",
//     "headers": {
//         "Accept": "application/json",
//         "api-token": "r1D7GxRxD3LyblkoZ3xO4eW1oTCWqaeh6-0B3Xl2VId2pCBBvXjq0q0pZZ5cg68JT10",
//         "user-email": "bocadepeztrail@gmail.com",
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJib2NhZGVwZXp0cmFpbEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJyMUQ3R3hSeEQzTHlibGtvWjN4TzRlVzFvVENXcWFlaDYtMEIzWGwyVklkMnBDQkJ2WGpxMHEwcFpaNWNnNjhKVDEwIn0sImV4cCI6MTY2MTU0NzE3OX0.-TOiNQiX06BYN1F_vD3j1u4n8dwpe7fSG9n2cjObgNQ"
//     }
// };
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.countrystatecity.in/v1/countries",
    "method": "GET",
    "headers": {
        "X-CSCAPI-KEY": "M29oNzFNMHdJb3hxMHlaNHRDWnduYklNSkt2am42bmxMSXdxcFg2WQ=="
    }
};
class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paises: [],
            provincias: [],
            ciudades: [],
            cedula: "",
            nombres: "",
            apellidos: "",
            correo: "",
            telefono: "",
            pais: "",
            provincia: "",
            ciudad: "",
            open: false,
            ruta10km: false,
            ruta21km: false,
            ruta34km: false,
        }
    }

    obtenerNombres = (e) => {
        this.setState({ nombres: e.target.value });
    }

    obtenerApellidos = (e) => {
        this.setState({ apellidos: e.target.value });
    }

    obtenerCorreo = (e) => {
        this.setState({ correo: e.target.value });
    }
    obtenerTelefono = (e) => {
        this.setState({ telefono: e.target.value });
    }

    obtenerCedula = (e) => {
        this.setState({ cedula: e.target.value });
    }
    obtenerPais = (e) => {
        this.setState({ pais: e.target.value });
    }
    obtenerCiudad = (e) => {
        this.setState({ ciudad: e.target.value });
    }

    obtenerRuta10km = (e) => {
        this.setState({ ruta10km: e.target.checked });
    }

    obtenerRuta21km = (e) => {
        this.setState({ ruta21km: e.target.checked });
    }

    obtenerRuta34km = (e) => {
        this.setState({ ruta34km: e.target.checked });
    }


    boton = (e) => {
        e.preventDefault();
        let usuario = [this.state.cedula, this.state.nombres, this.state.apellidos, this.state.correo, this.state.telefono, this.state.pais, this.state.provincia, this.state.ciudad, this.state.ruta10km, this.state.ruta21km, this.state.ruta34km];

        inscribirUsuario(usuario);
        // console.log(value);
        // if (value) {
        //     console.log("inscrito");
        // } else {
        //     console.log("no inscrito");
        // }

    }

    obtenerPaises() {
        try {
            $.ajax(settings).done(function (response) {
                this.setState({ paises: response });
            }.bind(this));
        } catch (error) {
            alert(error);
        }

    }


    // https://api.countrystatecity.in/v1/countries/EC/states/A/cities
    obtenerProvincia(e) {
        this.setState({ pais: e.target.value });
        settings.url = "https://api.countrystatecity.in/v1/countries/" + e.target.value + "/states";
        // settings.url = "https://www.universal-tutorial.com/api/states/" + e.target.value;
        $.ajax(settings).done(function (response) {
            this.setState({ provincias: response });
        }.bind(this));
    }

    obtenerCiudades(e) {
        this.setState({ provincia: e.target.value });
        settings.url = "https://api.countrystatecity.in/v1/countries/" + this.state.pais + "/states/" + e.target.value + "/cities";
        // settings.url = "https://www.universal-tutorial.com/api/cities/" + e.target.value;
        $.ajax(settings).done(function (response) {
            this.setState({ ciudades: response });
        }.bind(this));
    }

    componentDidMount() {
        this.obtenerPaises();
    }

    render() {
        var paises = this.state.paises.map((pais) => {
            return (
                <option key={pais.iso2} value={pais.iso2}>{pais.name} - {pais.iso2}</option>
            );
        });

        var provincias = this.state.provincias.map((provincia) => {
            return (
                <option key={provincia.iso2} value={provincia.iso2}>{provincia.name}</option>
            );
        });

        var ciudades = this.state.ciudades.map((ciudad) => {
            return (
                <option key={ciudad.iso2} value={ciudad.name}>{ciudad.name}</option>
            );
        });

        function classNames(...classes) {
            return classes.filter(Boolean).join(' ')
        }

        return (
            <>

                <section id="contact" className='bg-blend-multiply rounded-2xl'>
                    <div className="">
                        <Tab.Group>
                            <Tab.List className="mx-28 rounded-t-xl flex space-x-1 bg-dark-blue/80 p-1 border-t-2 border-double border-t-second-color border-l-2 border-l-second-color border-r-2 border-r-second-color">
                                <Tab className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm font-medium leading-5 text-white',
                                        selected
                                            ? ' border-b-2 border-double border-b-second-color'
                                            : ' '
                                    )
                                }>Inscripciones para las carreras</Tab>
                                <Tab className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm font-medium leading-5 text-white',
                                        selected
                                            ? ' border-b-2 border-double border-b-second-color'
                                            : ' '
                                    )
                                }>Inscripciones para el camping</Tab>
                            </Tab.List>
                            <Tab.Panels className="rounded-b-xl">
                                <Tab.Panel className="rounded-b-xl" >
                                    <div className="mx-28 rounded-b-xl">
                                        <div className="mt-0 sm:mt-0 rounded-b-xl">
                                            <div className="xsm:grid xsm:grid-cols-1 xsm:gap-4 sm:grid sm:grid-cols-3 sm:gap-5 md:grid md:grid-cols-5 md:gap-6 lg:grid lg:grid-cols-4 lg:gap-5 xl:grid xl:grid-cols-5 xl:gap-7 rounded-b-xl">
                                                <div className="xsm:mx-0 xsm:col-start-1 xsm:col-end-4 sm:col-start-1 sm:col-end-4 sm:mx-20 md:mx-24 md:col-start-1 md:col-end-6 lg:col-span-4 xl:col-start-1 xl:mx-50 2xl:mx-56 xl:col-end-6  rounded-b-xl">
                                                    <form action="#" >
                                                        <div className="shadow-md  overflow-hidden sm:rounded-md bg-dark-blue/80 border-double border-b-2 border-b-second-color border-l-2 border-l-second-color border-r-2 border-r-second-color rounded-b-xl">
                                                            <div className="px-4 py-5  sm:p-6">
                                                                <div className="xl:grid xl:grid-cols-6 xl:gap-6 lg:grid lg:grid-cols-6 lg:gap-6 sm:grid sm:grid-cols-6 sm:gap-4">
                                                                    <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                        <label htmlFor="Cedula" className="block text-sm font-medium text-second-color">
                                                                            C&eacute;dula
                                                                        </label>
                                                                        <input
                                                                            onChange={this.obtenerCedula}
                                                                            type="text"
                                                                            name="Cedula"
                                                                            id="Cedula"
                                                                            autoComplete="given-name"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className=" xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                        <label htmlFor="Nombres" className="block text-sm font-medium text-second-color">
                                                                            Nombres
                                                                        </label>
                                                                        <input
                                                                            onChange={this.obtenerNombres}
                                                                            type="text"
                                                                            name="Nombres"
                                                                            id="Nombres"
                                                                            autoComplete="given-name"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>

                                                                    <div className=" xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                        <label htmlFor="Apellidos" className="block text-sm font-medium text-second-color">
                                                                            Apellidos
                                                                        </label>
                                                                        <input
                                                                            onChange={this.obtenerApellidos}
                                                                            type="text"
                                                                            name="Apellidos"
                                                                            id="Apellidos"
                                                                            autoComplete="family-name"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>

                                                                    <div className="xl:col-span-3 lg:col-span-3 sm:col-span-6">
                                                                        <label htmlFor="email" className="block text-sm font-medium text-second-color">
                                                                            Correo electr&oacute;nico
                                                                        </label>
                                                                        <input
                                                                            onChange={this.obtenerCorreo}
                                                                            type="email"
                                                                            name="email"
                                                                            id="email"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>

                                                                    <div className="xl:col-span-3 lg:col-span-3 sm:col-span-6">
                                                                        <label htmlFor="Telefono" className="block text-sm font-medium text-second-color">
                                                                            Tel&eacute;fono
                                                                        </label>
                                                                        <input
                                                                            onChange={this.obtenerTelefono}
                                                                            type="tel"
                                                                            name="Telefono"
                                                                            id="Telefono"
                                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                        />
                                                                    </div>

                                                                    <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                        <label htmlFor="Pais" className="block text-sm font-medium text-second-color">
                                                                            Pa&iacute;s
                                                                        </label>
                                                                        <select

                                                                            onChange={(e) => this.obtenerProvincia(e)}
                                                                            id="Pais"
                                                                            name="Pais"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option value="">Seleccione un pa&iacute;s</option>
                                                                            {paises}
                                                                        </select>
                                                                    </div>

                                                                    <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                        <label htmlFor="Provincia" className="block text-sm font-medium text-second-color">
                                                                            Provincia
                                                                        </label>
                                                                        <select
                                                                            onChange={(e) => this.obtenerCiudades(e)}
                                                                            id="Provincia"
                                                                            name="Provincia"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option value="">Seleccione una provincia</option>
                                                                            {provincias}

                                                                        </select>
                                                                    </div>
                                                                    <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                        <label htmlFor="Ciudad" className="block text-sm font-medium text-second-color">
                                                                            Ciudad
                                                                        </label>
                                                                        <select
                                                                            onChange={this.obtenerCiudad}
                                                                            id="Ciudad"
                                                                            name="Ciudad"
                                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        >
                                                                            <option value="">Seleccione una ciudad</option>
                                                                            {ciudades}
                                                                        </select>
                                                                    </div>

                                                                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5">
                                                                        <div className="px-4 py-5  bg-white/30 rounded-md space-y-6 sm:p-6">
                                                                            <fieldset>
                                                                                <div className='grid grid-rows-3 gap-5'>

                                                                                    <div className="row-span-1 font-medium text-lg text-second-color" aria-hidden="true">
                                                                                        RUTAS
                                                                                    </div>
                                                                                    <div className="row-span-6 xl:grid xl:grid-cols-6 xl:gap-x-32 xl:px-8 lg:grid lg:grid-cols-6 lg:gap-x-10 sm:grid sm:grid-cols-1 sm:gap-x-10">
                                                                                        <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-lg border-double border-2 border-second-color transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                                                                                            <div className="">
                                                                                                <input
                                                                                                    id="10km"
                                                                                                    name="comments"
                                                                                                    type="checkbox"
                                                                                                    onChange={this.obtenerRuta10km}
                                                                                                />
                                                                                                <label htmlFor="10km" className="combos text-second-color ">
                                                                                                    <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                                                                                        <img
                                                                                                            src='../imagenes/rutas/ruta10km.png'
                                                                                                            alt="Ruta32KM"
                                                                                                            className=" w-full h-full object-center object-cover"
                                                                                                        />
                                                                                                    </div>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2  rounded-lg border-double border-2 border-second-color transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                                                                                            <div className="ml-3 text-sm">
                                                                                                <input
                                                                                                    id="21km"
                                                                                                    name="candidates"
                                                                                                    type="checkbox"
                                                                                                    onChange={this.obtenerRuta21km}
                                                                                                />
                                                                                                <label htmlFor="21km" className="combos text-second-color ">
                                                                                                    <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                                                                                        <img
                                                                                                            src='../imagenes/rutas/ruta21km.png'
                                                                                                            alt="Ruta32KM"
                                                                                                            className="w-full h-full object-center object-cover"
                                                                                                        />
                                                                                                    </div>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-lg border-double border-2 border-second-color">
                                                                                            <div className="ml-3 text-sm">
                                                                                                <input
                                                                                                    id="34km"
                                                                                                    name="offers"
                                                                                                    type="checkbox"
                                                                                                    onChange={this.obtenerRuta34km} />
                                                                                                <label htmlFor="34km" className="combos text-second-color ">
                                                                                                    <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                                                                                        <img
                                                                                                            src='../imagenes/rutas/ruta34km.png'
                                                                                                            alt="Ruta32KM"
                                                                                                            className="w-full h-full object-center object-cover"
                                                                                                        />
                                                                                                    </div>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                            </fieldset>

                                                                        </div>

                                                                    </div>



                                                                </div>
                                                            </div>
                                                            <div className="px-4 py-3 bg-dark-blue text-center sm:px-6">
                                                                <button

                                                                    onClick={this.boton}
                                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-second-color hover:bg-second-color/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Guardar Cambios
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </Tab.Panel>
                                <Tab.Panel className="" >Content 2</Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>



                </section>


            </>
        );

    }


}

export default Formulario;