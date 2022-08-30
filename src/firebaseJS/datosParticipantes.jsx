import { app } from './conexion.jsx';
import { ref, getDatabase, set } from "firebase/database";


export const db = getDatabase(app);


export function inscribirUsuario(usuario) {
    set(ref(db, `participantes/${usuario[0]}`), {
        cedula: usuario[0],
        nombres: usuario[1],
        apellidos: usuario[2],
        correo: usuario[3],
        telefono: usuario[4],
        pais: usuario[5],
        provincia: usuario[6],
        ciudad: usuario[7],
        ruta10km: usuario[8],
        ruta21km: usuario[9],
        ruta34km: usuario[10],
    }).then(() => {
        asignarNum(usuario);
    }).catch(() => {
        alert("Participante ya inscrito en la carrera");
    });
}

function numAleatorio() {
    let aleatorio = Math.ceil(Math.random() * 2000);
    return aleatorio;
}

function asignarNum(usuario) {
    let carreras=[];
    if (usuario[8]) {
        carreras[0] = numAleatorio();

        // set(ref(db, `Carrera/Rutas/ruta10km/${usuario[0]}`), {
        //     numero: numAleatorio(),
        // }).then(() => {

        // }).catch(error => {
        //     alert("Error al asignar numero: " + error);

        // });
    } if (usuario[9]) {
        set(ref(db, `Carrera/Rutas/ruta21km/${usuario[0]}`), {
            numero: numAleatorio(),
        }).then(() => {
        }).catch(error => {
            alert("Error al asignar numero: " + error);

        });
    } if (usuario[10]) {
        set(ref(db, `Carrera/Rutas/ruta34km/${usuario[0]}`), {
            numero: numAleatorio(),
        }).then(() => {

        }).catch(error => {
            alert("Error al asignar numero: " + error);

        });
    }
}



