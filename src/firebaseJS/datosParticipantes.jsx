import { app } from './conexion.jsx';
import { ref, getDatabase, set, onValue } from "firebase/database";

export const db = getDatabase(app);
export async function inscribirUsuario(usuario) {
    alert("Antes de la inscrcipción");
    try {
        await onValue(ref(db, `participantes/${usuario[0]}`), (snapshot) => {
            if (!snapshot.exists()) {
                alert("Durante la inscrcipción");
                set(ref(db, `participantes/${usuario[0]}`), {
                    cedula: usuario[0],
                    nombres: usuario[1],
                    apellidos: usuario[2],
                    correo: usuario[3],
                    telefono: usuario[4],
                    pais: usuario[5],
                    provincia: usuario[6],
                    ciudad: usuario[7],
                });
            } else {
                
                alert("Error en la inscrcipción");
                // throw new Error("Usuario ya registrado");
                return false;
            }
        });
        alert("Fin de la inscrcipción");
        return true;
    } catch (error) {
        alert("Error en la inscrcipción");
        console.log(error);
        return false
    }


}

export function validaciónUsuario(Cedula) {
    let ver = onValue(ref(db, `participantes/${Cedula}`), (snapshot) => snapshot.exists());
    return ver;
}


