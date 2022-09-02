import $ from 'jquery';
import React, { Component } from 'react';
import { inscribirUsuario } from '../firebaseJS/datosParticipantes';
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
            Sexo: "",
            FechaNac: "",
            ContactoEmergencia: "",
            CondicionMedica: "",
            Club: "",
            TallaCamiseta: "",
            open: false,
            ruta10km: false,
            ruta21km: false,
            ruta34km: false
        }
    }
    obtenerSexo = (e) => {
        this.setState({ Sexo: e.target.value })
    }
    obtenerFechaNac = (e) => {
        this.setState({ FechaNac: e.target.value })
    }
    obtenerContEmer = (e) => {
        this.setState({ ContactoEmergencia: e.target.value })
    }
    obtenerCondMed = (e) => {
        this.setState({ CondicionMedica: e.target.value })
    }
    obtenerClub = (e) => {
        this.setState({ Club: e.target.value })
    }
    obtenerTalla = (e) => {
        this.setState({ TallaCamiseta: e.target.value })
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
    establecerRutas = (e) => {
        this.setState({ ruta10km: e.target.value === "10km" ? true : false });
        this.setState({ ruta21km: e.target.value === "21km" ? true : false });
        this.setState({ ruta34km: e.target.value === "34km" ? true : false });
    }
    obtenerRuta10km = (e) => {
        this.setState({ ruta10km: e.target.checked });
    }
    obtenerRuta21km = (e) => {
        this.setState({ ruta21km: e.target.checked });
    }
    obtenerRuta34km = (e) => {
        console.log(e.target.value);
        this.setState({ ruta34km: e.target.value });
    }
    boton = (e) => {
        e.preventDefault();
        let usuario = [this.state.cedula, this.state.nombres, this.state.apellidos, this.state.correo, this.state.telefono, this.state.pais, this.state.provincia, this.state.ciudad, this.state.ruta10km, this.state.ruta21km, this.state.ruta34km, this.state.Sexo, this.state.FechaNac, this.state.ContactoEmergencia, this.state.CondicionMedica, this.state.Club, this.state.TallaCamiseta];
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

    obtenerProvincia(e) {
        this.setState({ pais: e.target.value });
        settings.url = "https://api.countrystatecity.in/v1/countries/" + e.target.value + "/states";
        $.ajax(settings).done(function (response) {
            this.setState({ provincias: response });
        }.bind(this));
    }
    obtenerCiudades(e) {
        this.setState({ provincia: e.target.value });
        settings.url = "https://api.countrystatecity.in/v1/countries/" + this.state.pais + "/states/" + e.target.value + "/cities";
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
        return (
            <>
                <section id="contact" className='bg-blend-multiply rounded-2xl'>
                    <div id="Inscripciones" className="">
                        <div className="mx-28 rounded-b-xl">
                            <div className="mt-0 sm:mt-0 rounded-b-xl">
                                <div className="xsm:grid xsm:grid-cols-1 xsm:gap-4 sm:grid sm:grid-cols-3 sm:gap-5 md:grid md:grid-cols-5 md:gap-6 lg:grid lg:grid-cols-4 lg:gap-5 xl:grid xl:grid-cols-5 xl:gap-7 rounded-b-xl">
                                    <div className="xsm:mx-0 xsm:col-start-1 xsm:col-end-4 sm:col-start-1 sm:col-end-4 sm:mx-20 md:mx-24 md:col-start-1 md:col-end-6 lg:col-span-4 xl:col-start-1 xl:mx-50 2xl:mx-56 xl:col-end-6  rounded-b-xl">
                                        <form action="#" >
                                            <div className="shadow-md  overflow-hidden sm:rounded-md bg-dark-blue/80 border-double border-2 border-second-color  rounded-xl">
                                                <div className='py-6 mx-5 border-dotted border-b-2 border-second-color'>
                                                    <h2 className='text-5xl text-second-color '>Realiza tu inscripci&oacute;n aqu&iacute;</h2>
                                                </div>
                                                <div className="px-4 py-5  sm:p-6">
                                                    <div className="xl:grid xl:grid-cols-6 xl:gap-6 lg:grid lg:grid-cols-6 lg:gap-6 sm:grid sm:grid-cols-6 sm:gap-4">
                                                        {/* 
                                                        * //* param Cedula --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                        <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                            <label htmlFor="Cedula" className="block text-sm font-medium text-second-color">
                                                                C&eacute;dula / Pasaporte
                                                            </label>
                                                            <input
                                                                onChange={(e) => this.obtenerCedula(e)}
                                                                type="text"
                                                                name="Cedula"
                                                                id="Cedula"
                                                                autoComplete="given-name"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        {/* 
                                                        * //* param Nombres --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                        <div className=" xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                            <label htmlFor="Nombres" className="block text-sm font-medium text-second-color">
                                                                Nombres
                                                            </label>
                                                            <input
                                                                onChange={(e) => this.obtenerNombres(e)}
                                                                type="text"
                                                                name="Nombres"
                                                                id="Nombres"
                                                                autoComplete="given-name"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        {/* 
                                                        * //* param Apellidos --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                        <div className=" xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                            <label htmlFor="Apellidos" className="block text-sm font-medium text-second-color">
                                                                Apellidos
                                                            </label>
                                                            <input
                                                                onChange={(e) => this.obtenerApellidos(e)}
                                                                type="text"
                                                                name="Apellidos"
                                                                id="Apellidos"
                                                                autoComplete="family-name"
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>

                                                        <div className="xl:col-span-6 lg:col-span-6 sm:col-span-6 grid grid-cols-4 gap-5">
                                                            <div className="xl:col-span-1 lg:col-span-1 sm:col-span-6">
                                                                {/* 
                                                        * //* param Fecha de nacimiento --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                                <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                    <label htmlFor="FechaNac" className="block text-sm font-medium text-second-color">
                                                                        Fecha de nacimiento
                                                                    </label>
                                                                    <input
                                                                        onChange={(e) => this.obtenerCorreo(e)}
                                                                        type="date"
                                                                        name="FechaNac"
                                                                        id="fechaNac"
                                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="xl:col-span-1 lg:col-span-1 sm:col-span-6">

                                                                {/* 
                                                        * //* param Sexo --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                                <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                    <label htmlFor="Sexo" className="block text-sm font-medium text-second-color">
                                                                        Sexo
                                                                    </label>
                                                                    <select
                                                                        onChange={(e) => this.obtenerSexo(e)}
                                                                        id="Sexo"
                                                                        name="Sexo"
                                                                        className=" mt-1 block w-full px-[12px] py-[8px] border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    >
                                                                        <option value="">Seleccione un valor</option>
                                                                        <option value="M">Masculino</option>
                                                                        <option value="F">Femenino</option>

                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="xl:col-span-1 lg:col-span-1 sm:col-span-6">
                                                                {/* 
                                                        * //* param Teléfono --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                                <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                    <label htmlFor="Telefono" className="block text-sm font-medium text-second-color">
                                                                        Tel&eacute;fono
                                                                    </label>
                                                                    <input
                                                                        onChange={(e) => this.obtenerTelefono(e)}
                                                                        type="tel"
                                                                        name="Telefono"
                                                                        id="Telefono"
                                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="xl:col-span-1 lg:col-span-1 sm:col-span-6">
                                                                {/* 
                                                        * //* param Correo electrónico --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                                <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                                    <label htmlFor="email" className="block text-sm font-medium text-second-color">
                                                                        Correo electr&oacute;nico
                                                                    </label>
                                                                    <input
                                                                        onChange={(e) => this.obtenerCorreo(e)}
                                                                        type="email"
                                                                        name="email"
                                                                        id="email"
                                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 
                                                            //* Contenedor Locación --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                        <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6 grid grid-rows-3 gap-5">
                                                            <div className="row-span-1">
                                                                {/* 
                                                                    * //* param País --------------------------------------------------------------------------------------------------------------------
                                                                 */}
                                                                {/* <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6"> */}
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
                                                                {/* </div> */}

                                                            </div>
                                                            {/* 
                                                                * //* param Provincia --------------------------------------------------------------------------------------------------------------------
                                                            */}
                                                            <div className="row-span-1">
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
                                                            <div className="row-span-1">
                                                                {/* 
                                                                    * //* param Ciudad --------------------------------------------------------------------------------------------------------------------
                                                                */}
                                                                <label htmlFor="Ciudad" className="block text-sm font-medium text-second-color">
                                                                    Ciudad
                                                                </label>
                                                                <select
                                                                    onChange={(e) => this.obtenerCiudad(e)}
                                                                    id="Ciudad"
                                                                    name="Ciudad"
                                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                >
                                                                    <option value="">Seleccione una ciudad</option>
                                                                    {ciudades}
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                            <div className="grid grid-rows-3 gap-5">
                                                                {/*
                                                                    * //* param Club -------------------------------------------------------------------------------------------------------------------- 
                                                                 */}
                                                                <div className="xl:row-span-1 lg:row-span-1 sm:row-span-1">
                                                                    <label htmlFor="Club" className="block text-sm font-medium text-second-color">
                                                                        Club
                                                                    </label>
                                                                    <input
                                                                        onChange={(e) => this.obtenerClub(e)}
                                                                        type="text"
                                                                        name="Club"
                                                                        id="Club"
                                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                                {/* 
                                                                    //* param Talla --------------------------------------------------------------------------------------------------------------------
                                                                 */}
                                                                <div className="xl:row-span-1 lg:row-span-1 sm:row-span-1">
                                                                    <label htmlFor="Talla" className="block text-sm font-medium text-second-color">
                                                                        Talla
                                                                    </label>
                                                                    <select
                                                                        onChange={(e) => this.obtenerTalla(e)}
                                                                        id="Talla"
                                                                        name="Talla"
                                                                        className=" mt-1 block w-full px-[12px] py-[8px] border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    >
                                                                        <option value="">Seleccione un valor</option>
                                                                        <option value="XS">XS</option>
                                                                        <option value="S">S</option>
                                                                        <option value="M">M</option>
                                                                        <option value="L">L</option>
                                                                        <option value="XL">XL</option>

                                                                    </select>
                                                                </div>
                                                                {/*
                                                                    * //* param Contacto de emergencia -------------------------------------------------------------------------------------------------------------------- 
                                                                 */}
                                                                <div className="xl:row-span-1 lg:row-span-1 sm:row-span-1">
                                                                    <label htmlFor="ContEmer" className="block text-sm font-medium text-second-color">
                                                                        Contacto de emergencia
                                                                    </label>
                                                                    <input
                                                                        onChange={(e) => this.obtenerContEmer(e)}
                                                                        type="text"
                                                                        name="ContEmer"
                                                                        id="ContEmer"
                                                                        autoComplete="given-name"
                                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="xl:col-span-2 lg:col-span-2 sm:col-span-6">
                                                            <label htmlFor="CondMed" className="block text-sm font-medium text-second-color">
                                                                Condici&oacute;n m&eacute;dica
                                                            </label>
                                                            <textarea
                                                                id="CondMed"
                                                                name='CondMed'
                                                                onChange={(e) => this.obtenerCondMed(e)}
                                                                className="mt-1 min-h-[200px] p-5 text-justify focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                rows="3"
                                                                placeholder="Describir a detalle si contiene algun tipo de condición médica como: Diabétes, problemas cardiacos entre otros"></textarea>
                                                        </div>
                                                        {/* 
                                                        * //* param RUTAS --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-5">
                                                            <div className="px-4 py-5  bg-white/30 rounded-md space-y-6 sm:p-6">
                                                                <fieldset>
                                                                    <div className='grid grid-rows-3 gap-5'>
                                                                        <div className="row-span-3 font-medium text-4xl text-second-color" aria-hidden="true">
                                                                            RUTAS
                                                                        </div>
                                                                        <div className="row-span-6 xl:grid xl:grid-cols-6 xl:gap-x-32 xl:px-8 lg:grid lg:grid-cols-6 lg:gap-x-10 sm:grid sm:grid-cols-1 sm:gap-x-10">
                                                                            <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-[20px] p-[1em] bg-[#f5f5f5]/50 border-solid border-4 border-[#c3c6ce] transition ease-out hover:border-4 hover:border-second-color hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] duration-[0.9s]">
                                                                                <div className="grid grid-rows-3 gap-7">
                                                                                    <div className="row-span-3">
                                                                                        <input
                                                                                            id="10km"
                                                                                            name="rutas"
                                                                                            type="radio"
                                                                                            value="10km"
                                                                                            onClick={(e) => this.establecerRutas(e)}
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
                                                                                    <div className="row-span-1">
                                                                                        <h2 className='text-4xl text-dark-blue'>Precio - 25$</h2>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-[20px] p-[1em] bg-[#f5f5f5]/50 border-solid border-4 border-[#c3c6ce] transition ease-out hover:border-4 hover:border-second-color hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] duration-[0.9s]">
                                                                                <div className="grid grid-rows-3 gap-7">
                                                                                    <div className="row-span-3">
                                                                                        <input
                                                                                            id="21km"
                                                                                            name="rutas"
                                                                                            type="radio"
                                                                                            value="21km"
                                                                                            onClick={(e) => this.establecerRutas(e)}
                                                                                        />
                                                                                        <label htmlFor="21km" className="combos text-second-color ">
                                                                                            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                                                                                                <img
                                                                                                    src='../imagenes/rutas/ruta21km.png'
                                                                                                    alt="Ruta21KM"
                                                                                                    className="w-full h-full object-center object-cover"
                                                                                                />
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="row-span-1">
                                                                                        <h2 className='text-4xl text-dark-blue'>Precio - 35$</h2>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className="xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-[20px] p-[1em] bg-[#f5f5f5]/50 border-solid border-4 border-[#c3c6ce] transition ease-out hover:border-4 hover:border-second-color hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] duration-[0.9s]">
                                                                                <div className="grid grid-rows-3 gap-7">
                                                                                    <div className="row-span-3">
                                                                                        <input
                                                                                            id="34km"
                                                                                            name="rutas"
                                                                                            type="radio"
                                                                                            value="34km"
                                                                                            onClick={(e) => this.establecerRutas(e)}
                                                                                        />
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
                                                                                    <div className="row-span-1">
                                                                                        <h2 className='text-4xl text-dark-blue'>Precio - 45$</h2>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 text-center sm:px-6">
                                                    <button
                                                        onClick={this.boton}
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-second-color hover:bg-second-color/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        Guardar Cambios
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }


}

export default Formulario;