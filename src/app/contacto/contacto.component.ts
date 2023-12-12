import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Datos } from '../models/datos.model';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  nombre: string = "";
  email: string = "";
  mensaje: string = "";
  respuesta: string = "";
  datos: Datos | null = null;  

  readonly regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  @Output() envio_formulario = new EventEmitter();

  constructor(){
    
  }

  contactar(): void{    
    if(this.validarForm()){
      this.datos = new Datos(this.nombre, this.email, this.mensaje, this.respuesta);
      this.envio_formulario.emit(this.datos);
      this.nombre = this.email = this.mensaje = this.respuesta = "";
    }
  }


  validarForm(): boolean {
    var nameError: HTMLElement | null = document.getElementById("errorName");
    var emailError: HTMLElement | null = document.getElementById("errorEmail");
    var messageError: HTMLElement | null = document.getElementById("errorMensaje");
    var spamError: HTMLElement | null = document.getElementById("errorSpam");

    this.vacio(this.nombre, nameError);
    this.vacio(this.email, emailError);
    this.vacio(this.mensaje, messageError);
    this.vacio(this.respuesta, spamError);

    if (!nameError?.classList.contains("hidden") ||
        !emailError?.classList.contains("hidden")||
        !messageError?.classList.contains("hidden")||
        !spamError?.classList.contains("hidden")) {
        return false;
    }

    return true;
  }

  vacio(field: string | undefined, errorField: HTMLElement | null): void{
    if(field === "") {
        errorField?.classList.remove("hidden");
    } 
    else {
        errorField?.classList.add("hidden");
    }
    if(errorField == document.getElementById("errorEmail")){
      if(this.regex_email.test(this.email) == false){
        errorField?.classList.remove("hidden");
      }
    }
    else if(errorField == document.getElementById("errorSpam")){
      if(field!="5"){
        errorField?.classList.remove("hidden");
      }
    }
  }
}
