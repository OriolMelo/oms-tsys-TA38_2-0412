export class Datos {
    
    nombre: string = "";
    email: string = "";
    mensaje: string = "";
    respuesta: string = "";

    constructor(nombre: string = "", email: string = "", mensaje: string = "", respuesta: string = ""){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
        this.respuesta = respuesta;
    }
}
