import $ from 'jquery';
// import {useForm} from "react-hook-form";
import React, { Component } from 'react';
// import { inscribirUsuario } from '../firebaseJS/datosParticipantes';
// import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.countrystatecity.in/v1/countries",
    "method": "GET",
    "headers": {
        "X-CSCAPI-KEY": "M29oNzFNMHdJb3hxMHlaNHRDWnduYklNSkt2am42bmxMSXdxcFg2WQ=="
    }
};
const MySwal = withReactContent(Swal);

// var baseUrl = "http://localhost/bocadepez/BD/functions.php";
var baseUrl = "https://bocadepeztrail.com/BD/functions.php";
class Formulario extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
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
            ruta34km: false,
            error: 'text-red-500 font-bold text-[18px]',
            errors: {},
            image: null,
            isLoading: false,
            ruta: "",
            categoria: ""
        }

    }


    validate = values => {
        let band = false;
        const errores = {};
        if (!values.cedula) {
            errores.cedula = "La cédula/pasaporte obligatorio"
            band = true;
        }
        if (!values.nombres) {
            errores.nombres = "El nombre es obligatorio"
            band = true;
        }
        if (!values.apellidos) {
            errores.apellidos = "El apellido es obligatorio";
            band = true;
        }
        if (!values.FechaNac) {
            errores.FechaNac = "La fecha de nacimiento es obligatorio";
            band = true;
        } else {
            const today = new Date();
            const birthDate = new Date(values.FechaNac);
            const age = today.getFullYear() - birthDate.getFullYear();
            if (age < 14) {
                errores.FechaNac = "Debes ser mayor a 14 años";
                band = true;
            }
        }
        if (!values.Sexo) {
            errores.Sexo = "El sexo es obligatorio";
            band = true;
        }
        if (!values.telefono) {
            errores.telefono = "El teléfono es obligatorio";
            band = true;
        }
        if (!values.correo) {
            errores.email = "El email es obligatorio";
            band = true;
        }
        if (!values.pais || !values.provincia || !values.ciudad) {
            errores.pais = "Completa tu lugar de residencia";
            band = true;
        }

        if (!values.TallaCamiseta) {
            errores.talla = "Selecciona una talla";
            band = true;
        }
        if (!values.image) {
            errores.image = "Por favor carga el archivo";
            band = true;
        }

        if (!values.ruta10km && !values.ruta21km && !values.ruta34km) {
            errores.ruta = "Debes seleccionar un ruta";
            // console.log("entro");
            band = true;
        }

        if (band) {
            const Toast = MySwal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'El formulario contiene algunos errores'
            })
        }
        return errores;
    }


    clickPayphone = (e) => {
        const { errors, ...sinErrors } = this.state;
        const result = this.validate(sinErrors);
        this.setState({ errors: result });
        // if (!Object.keys(result).length) {
            if (this.formRef.current) {
                this.formRef.current.submit();
            }
        // }
    }

    handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        console.log("Boton 1");
        const { errors, ...sinErrors } = this.state;
        const result = this.validate(sinErrors);
        this.setState({ errors: result });
        if (!Object.keys(result).length) {
            // !!Funciones para guardar en firebase
            let ruta = "";
            if (this.state.ruta10km) {
                ruta = "5km";
            } else if (this.state.ruta21km) {
                ruta = "15km";
            } else if (this.state.ruta34km) {
                ruta = "35km";
            };
            let categoria = "";
            const today = new Date();
            const birthDate = new Date(this.state.FechaNac);
            const age = today.getFullYear() - birthDate.getFullYear();
            if (age >= 14 && age <= 17) {
                categoria = "Juveniles";
            } else if (age >= 18 && age <= 29) {
                categoria = "Open";
            } else if (age >= 30 && age <= 40) {
                categoria = "Master A";
            } else if (age >= 41 && age <= 50) {
                categoria = "Master B";
            } else if (age >= 51 && age <= 60) {
                categoria = "Master C";
            } else if (age >= 61) {
                categoria = "Master D";
            }

            let data_user = {
                "par_ci": this.state.cedula,
                "par_nom": this.state.nombres,
                "par_ape": this.state.apellidos,
                "par_fecnac": this.state.FechaNac,
                "par_sexo": this.state.Sexo,
                "par_tel": this.state.telefono,
                "par_email": this.state.correo,
                "par_pais": this.state.pais,
                "par_prov": this.state.provincia,
                "par_ciu": this.state.ciudad,
                "par_club": this.state.Club,
                "par_talla": this.state.TallaCamiseta,
                "par_cont_emer": this.state.ContactoEmergencia,
                "par_cond_med": this.state.CondicionMedica,
                'par_ruta': ruta,
                'par_categoria': categoria
            }
            const formData = new FormData();
            formData.append('file', this.state.image);
            formData.append('jsonData', JSON.stringify(data_user));
            formData.append('textData', 'add_user');
            this.setState({ isLoading: true });
            $.ajax({
                type: "POST",
                url: baseUrl,
                data: formData,
                processData: false,
                contentType: false,
            }).done(function (response) {
                const Toast = MySwal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 10000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'La inscripción se realizo de forma existosa, pronto te enviaremos más información a tu correo'
                })
            }).fail(function (response) {
                const Toast = MySwal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'error',
                    title: 'La cedula/pasaporte ya se encuentra registrado por favor revisar tu correo electrónico para más información'
                })
            }).always(() => {
                this.setState({ isLoading: false });
            });
        }

    }

    obtenerSexo = (e) => {
        this.setState({ Sexo: e.target.value })
    }

    obtenerCategoria = (e) => {
        this.setState({ categoria: e.target.value })
    }
    obtenerImage = (e) => {
        this.setState({ image: e.target.files[0] });
    }
    obtenerFechaNac = (e) => {
        let categoria = "";
        const today = new Date();
        const birthDate = new Date(this.state.FechaNac);
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age >= 14 && age <= 17) {
            categoria = "Juveniles";
        } else if (age >= 18 && age <= 29) {
            categoria = "Open";
        } else if (age >= 30 && age <= 40) {
            categoria = "Master A";
        } else if (age >= 41 && age <= 50) {
            categoria = "Master B";
        } else if (age >= 51 && age <= 60) {
            categoria = "Master C";
        } else if (age >= 61) {
            categoria = "Master D";
        }
        document.getElementById("Categoria").value = categoria
        // this.setState({ categoria: categoria })
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
        this.setState({ ruta10km: e.target.value === "5km" ? true : false });
        this.setState({ ruta21km: e.target.value === "15km" ? true : false });
        this.setState({ ruta34km: e.target.value === "35km" ? true : false });
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
        // let usuario = [this.state.cedula, this.state.nombres, this.state.apellidos, this.state.correo, this.state.telefono, this.state.pais, this.state.provincia, this.state.ciudad, this.state.ruta10km, this.state.ruta21km, this.state.ruta34km, this.state.Sexo, this.state.FechaNac, this.state.ContactoEmergencia, this.state.CondicionMedica, this.state.Club, this.state.TallaCamiseta];
        // inscribirUsuario(usuario);
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
        const { errors } = this.state;
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

                    <div className="gap-5 rounded-b-xl px-28 py-[70px] tab:px-0 mob:px-0 xmob:px-0 " id="Inscripciones">
                        <div className="rounded-b-xl flex flex-col justify-center items-center" >
                            <form action="https://bocadepeztrail.com/prueba/payment.php" ref={this.formRef} method='POST' onSubmit={this.handleSubmit} className="w-full max-w-6xl">
                                <div className="pb-28  shadow-md w-full  overflow-hidden sm:rounded-md bg-dark-blue/80 border-double border-2 border-second-color  rounded-xl self-center">
                                    <div className='py-6 mx-5 border-dotted border-b-2 border-second-color'>
                                        <h2 className='text-5xl tab:text-3xl mob:text-3xl xmob:text-3xl text-second-color '>Realiza tu inscripci&oacute;n aqu&iacute;</h2>
                                    </div>

                                    {/* <div className="grid gap-6 pc:grid-cols-6 tab:grid-cols-1 mob:grid-cols-1 xmob:grid-cols-1 px-28 py-5 tab:px-5 mob:px-5 xmob:px-5"> */}
                                    <div className="flex flex-wrap justify-center items-center gap-6 px-16 py-5 tab:px-5 mob:px-5 xmob:px-5">

                                        <div className='flex flex-wrap gap-4 mob3:justify-center justify-between items-center max-w-3xl'>
                                            <div className='w-full'>
                                                <h4 className='text-4xl font-bold text-second-color'>Comencemos con tu información personal</h4>
                                                <p className='text-second-color text-lg'>Es necesario que esta información sea bien detallada para los resultados luego de la competencia</p>
                                                <p className='text-second-color text-lg'><span className='font-bold'>¡IMPORTANTE!</span> Solo se puede registrar una cedula por participante</p>
                                            </div>
                                            {/* 
                                            * //* param Cedula --------------------------------------------------------------------------------------------------------------------
                                        */}
                                            <div className="">
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

                                                {errors.cedula && <span htmlFor="Cedula" className={this.state.error}>
                                                    {errors.cedula}
                                                </span>}
                                            </div>
                                            {/* 
                                                        * //* param Nombres --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                            <div className="">
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
                                                {errors.nombres && <span htmlFor="Nombre" className={this.state.error}>
                                                    {errors.nombres}
                                                </span>}
                                            </div>
                                            {/* 
                                                        * //* param Apellidos --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                            <div className="">
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
                                                {errors.apellidos && <span htmlFor="Apellidos" className={this.state.error}>
                                                    {errors.apellidos}
                                                </span>}
                                            </div>

                                            {/* 
                                                        * //* param Fecha de nacimiento --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                            <div className="max-w-[225px]">
                                                <label htmlFor="FechaNac" className="block text-sm font-medium text-second-color">
                                                    Fecha de nacimiento
                                                </label>
                                                <input
                                                    onChange={(e) => this.obtenerFechaNac(e)}
                                                    type="date"
                                                    name="FechaNac"
                                                    id="fechaNac"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                                {errors.FechaNac && <span htmlFor="FecNac" className={this.state.error}>
                                                    {errors.FechaNac}
                                                </span>}
                                            </div>





                                            {/* 
                                                        * //* param Sexo --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                            <div className="">
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
                                                {errors.Sexo && <span htmlFor="Sexo" className={this.state.error}>
                                                    {errors.Sexo}
                                                </span>}
                                            </div>
                                            {/* 
                                                        * //* param Teléfono --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                            <div className="">
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
                                                {errors.telefono && <span htmlFor="Telefono" className={this.state.error}>
                                                    {errors.telefono}
                                                </span>}
                                            </div>


                                            {/* 
                                        * //* param Correo electrónico --------------------------------------------------------------------------------------------------------------------
                                        */}
                                            <div className="">
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
                                                {errors.email && <span htmlFor="email" className={this.state.error}>
                                                    {errors.email}
                                                </span>}
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap gap-4 justify-between items-center max-w-3xl mob:flex-nowrap mob:flex-col'>
                                            <div className='w-full'>
                                                <h4 className='text-4xl font-bold text-second-color'>Tu lugar de residencia</h4>
                                                <p className='text-second-color text-lg'>Por favor selecciona tu lugar de residencia actual</p>
                                            </div>
                                            {/* 
                                                                    * //* param País --------------------------------------------------------------------------------------------------------------------
                                                                 */}
                                            <div className="w-56">
                                                <label htmlFor="Pais" className=" text-sm font-medium text-second-color">
                                                    Pa&iacute;s
                                                </label>
                                                <select
                                                    onChange={(e) => this.obtenerProvincia(e)}
                                                    id="Pais"
                                                    name="Pais"
                                                    className="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">Seleccione un pa&iacute;s</option>
                                                    {paises}
                                                </select>

                                            </div>

                                            {/* 
                                                                * //* param Provincia --------------------------------------------------------------------------------------------------------------------
                                                            */}
                                            <div className="w-56">
                                                <label htmlFor="Provincia" className="text-sm font-medium text-second-color">
                                                    Provincia
                                                </label>
                                                <select
                                                    onChange={(e) => this.obtenerCiudades(e)}
                                                    id="Provincia"
                                                    name="Provincia"
                                                    className="mt-1  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">Seleccione una provincia</option>
                                                    {provincias}
                                                </select>
                                            </div>
                                            {/* 
                                                                    * //* param Ciudad --------------------------------------------------------------------------------------------------------------------
                                                                */}
                                            <div className="w-56">
                                                <label htmlFor="Ciudad" className="text-sm font-medium text-second-color">
                                                    Ciudad
                                                </label>
                                                <select
                                                    onChange={(e) => this.obtenerCiudad(e)}
                                                    id="Ciudad"
                                                    name="Ciudad"
                                                    className="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="">Seleccione una ciudad</option>
                                                    {ciudades}
                                                </select>
                                            </div>

                                            <div className="w-full">
                                                {errors.pais && <span htmlFor="Pais" className={this.state.error}>
                                                    {errors.pais}
                                                </span>}
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap gap-4 justify-between items-center max-w-3xl mob:flex-nowrap mob:flex-col'>
                                            <div className='w-full'>
                                                <h4 className='text-4xl font-bold text-second-color'>Conozcamos un poco más de ti</h4>
                                                <p className='text-second-color text-lg'>En esta sección deseamos saber la talla para la camiseta que se te entregará para la carrera</p>
                                                <p className='text-second-color text-lg'>De manera opcional puedes llenar la información de club y de condición médica</p>
                                                <p className='text-second-color text-lg'><span className='font-bold'>¡IMPORTANTE!</span> Asegurate que el contacto de emergencia este correcto</p>
                                            </div>
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
                                                <input
                                                    onChange={(e) => this.obtenerCategoria(e)}
                                                    type="hidden"
                                                    name="Categoria"
                                                    id="Categoria"
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
                                                    <option value="S">S</option>
                                                    <option value="M">M</option>
                                                    <option value="L">L</option>
                                                    <option value="XL">XL</option>

                                                </select>
                                                {errors.talla && <span htmlFor="Talla" className={this.state.error}>
                                                    {errors.talla}
                                                </span>}
                                            </div>
                                            {/*
                                                                    * //* param Contacto de emergencia -------------------------------------------------------------------------------------------------------------------- 
                                                                 */}
                                            <div className="">
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
                                            <div className="w-full ">
                                                <label htmlFor="CondMed" className="block text-sm font-medium text-second-color">
                                                    Condici&oacute;n m&eacute;dica
                                                </label>
                                                <textarea
                                                    id="CondMed"
                                                    name='CondMed'
                                                    onChange={(e) => this.obtenerCondMed(e)}
                                                    className="resize-none  mt-1 min-h-[200px] p-5 text-justify focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    rows="3"
                                                    placeholder="Describir a detalle si contiene algun tipo de condición médica como: Diabétes, problemas cardiacos entre otros"></textarea>
                                            </div>
                                        </div>
                                        {/* 
                                                        * //* param RUTAS --------------------------------------------------------------------------------------------------------------------
                                                        */}
                                        <div className="max-w-3xl w-full">
                                            <div className="px-4 py-5  bg-white/30 rounded-md space-y-6 sm:p-6">
                                                <div className='grid grid-rows-3 gap-5'>
                                                    <div className="row-span-3 font-medium text-4xl text-second-color" aria-hidden="true">
                                                        RUTAS
                                                    </div>

                                                    {/* <div className="gap-y-4 place-content-center row-span-6 xl:grid xl:grid-cols-6 xl:gap-x-16 xl:px-8 lg:grid lg:grid-cols-6 lg:gap-x-10 sm:grid sm:grid-cols-1 sm:gap-x-10"> */}
                                                    <div className="gap-4 place-content-center row-span-6 flex flex-wrap">

                                                        {/* 
                                                        //* Anterior 
                                                        */}
                                                        <div className="ruta-checked xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-[20px] p-[1em] bg-[#f5f5f5]/50 border-solid border-4 border-[#c3c6ce] transition ease-out hover:border-4 hover:border-second-color hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] duration-[0.9s]">
                                                            <div className="grid grid-rows-3 gap-7">
                                                                <div className="row-span-3">
                                                                    <input
                                                                        id="5km"
                                                                        name="rutas"
                                                                        type="radio"
                                                                        value="5km"
                                                                        onClick={(e) => this.establecerRutas(e)}

                                                                    />
                                                                    <label htmlFor="5km" className="combos text-second-color ">
                                                                        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block grid place-content-center">
                                                                            <img
                                                                                src='../imagenes/rutas/ruta10km.png'
                                                                                alt="Ruta32KM"
                                                                                className=" w-44 h-44 object-center object-cover"
                                                                            />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="row-span-1">
                                                                    <h2 className='text-3xl text-dark-blue'>Ruta 5k - 25$</h2>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ruta-checked xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-[20px] p-[1em] bg-[#f5f5f5]/50 border-solid border-4 border-[#c3c6ce] transition ease-out hover:border-4 hover:border-second-color hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] duration-[0.9s]">
                                                            <div className="grid grid-rows-3 gap-7">
                                                                <div className="row-span-3">
                                                                    <input
                                                                        id="15km"
                                                                        name="rutas"
                                                                        type="radio"
                                                                        value="15km"
                                                                        onClick={(e) => this.establecerRutas(e)}

                                                                    />
                                                                    <label htmlFor="15km" className="combos text-second-color ">
                                                                        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block grid place-content-center">
                                                                            <img
                                                                                src='../imagenes/rutas/ruta21km.png'
                                                                                alt="Ruta21KM"
                                                                                className="w-44 h-44 object-center object-cover"
                                                                            />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="row-span-1">
                                                                    <h2 className='text-3xl text-dark-blue'>Ruta 15k - 35$</h2>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="ruta-checked xl:col-span-2 lg:col-span-2 sm:col-span-2 rounded-[20px] p-[1em] bg-[#f5f5f5]/50 border-solid border-4 border-[#c3c6ce] transition ease-out hover:border-4 hover:border-second-color hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] duration-[0.9s]">
                                                            <div className="grid grid-rows-3 gap-7">
                                                                <div className="row-span-3">
                                                                    <input
                                                                        id="34km"
                                                                        name="rutas"
                                                                        type="radio"
                                                                        value="35km"
                                                                        onClick={(e) => this.establecerRutas(e)}

                                                                    />
                                                                    <label htmlFor="34km" className="combos text-second-color ">
                                                                        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block grid place-content-center">
                                                                            <img
                                                                                src='../imagenes/rutas/ruta34km.png'
                                                                                alt="Ruta32KM"
                                                                                className="w-44 h-44 object-center object-cover"
                                                                            />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="row-span-1">
                                                                    <h2 className='text-3xl text-dark-blue'>Ruta 35K - 45$</h2>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        {/* 
                                                        //* Anterior 
                                                        */}
                                                    </div>



                                                </div>

                                            </div>
                                            {errors.ruta && <span className={this.state.error}>
                                                {errors.ruta}</span>}
                                        </div>

                                        <div className="max-w-5xl w-full">

                                            <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
                                                <div className="row-span-3 font-medium text-4xl text-second-color" aria-hidden="true">
                                                    DATOS PARA LA TRANSFERENCIA
                                                </div>
                                                <div className='max-w-6xl w-full flex mob:flex-col gap-5'>
                                                    <div className="w-1/2 mob:w-full flex align-items justify-center flex-col gap-5">
                                                        <div className='flex justify-between items-center mob:pb-4 mob:flex-col mob:gap-2 mob:border-b-2 mob:border-b-solid mob:border-second-color'>
                                                            <h4 className='text-2xl font-bold text-second-color'>Entidad bancaria:</h4>
                                                            <p className='text-2xl font-bold text-second-color'>Banco Pichincha</p>
                                                        </div>
                                                        <div className='flex justify-between items-center mob:pb-4 mob:flex-col mob:gap-2 mob:border-b-2 mob:border-b-solid mob:border-second-color'>
                                                            <h4 className='text-2xl font-bold text-second-color'>Tipo de cuenta:</h4>
                                                            <p className='text-2xl font-bold text-second-color'>Cuenta de Ahorros</p>
                                                        </div>
                                                        <div className='flex justify-between items-center mob:pb-4 mob:flex-col mob:gap-2 mob:border-b-2 mob:border-b-solid mob:border-second-color'>
                                                            <h4 className='text-2xl font-bold text-second-color'>Número de cuenta:</h4>
                                                            <p className='text-2xl font-bold text-second-color'>2210344050</p>
                                                        </div>
                                                        <div className='flex justify-between items-center mob:pb-4 mob:flex-col mob:gap-2 mob:border-b-2 mob:border-b-solid mob:border-second-color'>
                                                            <h4 className='text-2xl font-bold text-second-color'>Cédula:</h4>
                                                            <p className='text-2xl font-bold text-second-color'>0195113491001</p>
                                                        </div>
                                                        <div className='flex justify-between items-center mob:pb-4 mob:flex-col mob:gap-2 mob:border-b-2 mob:border-b-solid mob:border-second-color'>
                                                            <h4 className='text-2xl font-bold text-second-color'>Nombre:</h4>
                                                            <p className='text-2xl font-bold text-second-color'>Black Funnel Machine</p>
                                                        </div>
                                                        <div className='flex justify-between items-center mob:pb-4 mob:flex-col mob:gap-2 mob:border-b-2 mob:border-b-solid mob:border-second-color'>
                                                            <h4 className='text-2xl font-bold text-second-color'>Correo electrónico:</h4>
                                                            <p className='text-2xl font-bold text-second-color'>blackfunnelmachine@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className='w-1/2 mob:w-full'>
                                                        <div className="w-full flex justify-center align-items">
                                                            <img className='w-[400px]' src="../imagenes/QR.jpg" alt="deuna" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <Accordion transition transitionTimeout={200} className='w-full'>
                                                    <AccordionItem header={
                                                        <div className='h-full'>
                                                            <h3 className='text-2xl p-5'>
                                                                Transferencia Bancaria
                                                            </h3>
                                                        </div>
                                                    } contentProps={{
                                                        className: "transition-height duration-200 ease-out"
                                                    }} className="border-b-solid border-b-2 border-b-second-color text-second-color font-semibold text-2xl">
                                                        <div className='bg-white/30 w-full h-full rounded-t '>
                                                            <table className="table-fixed">
                                                                <thead>
                                                                    <tr>
                                                                        <th className='w-1/2'>Song</th>
                                                                        <th className='w-1/2'>Year</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                                                        <td>1961</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Witchy Woman</td>
                                                                        <td>1972</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Shining Star</td>
                                                                        <td>1975</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </AccordionItem>

                                                    <AccordionItem contentProps={{
                                                        className: "transition-height duration-200 ease-out"
                                                    }} className="border-b-solid border-b-2 border-b-second-color text-second-color font-semibold text-2xl" header={
                                                        <div className='h-full'>
                                                            <h3 className='text-2xl p-5'>
                                                                Tarjeta de crédito/débito - Payphone
                                                            </h3>
                                                        </div>
                                                    }>
                                                        <div className="bg-white/30 w-full h-full rounded-t ">
                                                            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                                            vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                                            vitae, accumsan auctor mi.
                                                        </div>
                                                    </AccordionItem>

                                                    <AccordionItem contentProps={{
                                                        className: "transition-height duration-200 ease-out"
                                                    }} className="border-b-solid border-b-2 border-b-second-color text-second-color font-semibold text-2xl" header={
                                                        <div className='h-full'>
                                                            <h3 className='text-2xl p-5'>
                                                                Banco pichincha - De una!
                                                            </h3>
                                                        </div>
                                                    }>
                                                        <div className='bg-white/30 w-full h-full rounded-t '>Suspendisse massa risus, pretium id interdum in, dictum sit
                                                            amet ante. Fusce vulputate purus sed tempus feugiat.</div>
                                                    </AccordionItem>
                                                </Accordion> */}
                                            </div>
                                        </div>


                                        <div className='flex flex-wrap gap-4 justify-between items-center max-w-3xl'>
                                            <div className='w-full'>
                                                <h4 className='text-4xl font-bold text-second-color'>Como último paso</h4>
                                                <p className='text-second-color text-lg'><span className='font-bold'>¡IMPORTANTE!</span> Asegurate de enviar el comprobante de transferencia como una imagen</p>
                                            </div>

                                            <div className="w-full">
                                                <label htmlFor="image" className="block text-xl font-medium text-second-color">
                                                    Sube tu archivo aquí
                                                </label>
                                                <input
                                                    onChange={(e) => this.obtenerImage(e)}
                                                    type="file"
                                                    name="image"
                                                    accept=".jpg, .jpeg, .png, .gif, .pdf"
                                                    id="image"
                                                    className="mt-1 focus:ring-indigo-500 text-second-color focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                                {errors.image && <span htmlFor="image" className={this.state.error}>
                                                    {errors.image}
                                                </span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 text-center ">
                                        <button
                                            type="submit"
                                            // onClick={this.boton}
                                            className="inline-flex gap-4 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-second-color hover:bg-second-color/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Guardar Cambios
                                            {
                                                this.state.isLoading ? (
                                                    <div className="dot-spinner">
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                        <div className="dot-spinner__dot"></div>
                                                    </div>
                                                ) : ("")
                                            }
                                        </button>

                                        {/* <button type="button" onClick={this.clickPayphone}>
                                            Prueba
                                        </button> */}
                                    </div>
                                    <div className=" text-center ">
                                        <p className='pt-10 text-second-color text-lg'>Para más información o soporte contáctanos por nuetro email <a href="mailto:inscripciones@bocadepeztrail.com">inscripciones@bocadepeztrail.com</a> o contáctanos por nuestras redes sociales</p>
                                        <div id="conSocial" Style="margin:0px" >

                                            <ul className="social">
                                                <li><a rel='noreferrer' href="https://www.facebook.com/profile.php?id=100084407841702" target='_blank' className="fa fa-facebook">&nbsp;</a></li>
                                                <li><a rel='noreferrer' href="https://www.instagram.com/boca_de_pez/" target='_blank' className="fa fa-instagram">&nbsp;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >

                </section >
            </>
        );
    }


}

export default Formulario;