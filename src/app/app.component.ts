import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { Datos } from './models/datos.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactoComponent, MostrarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contacto';

  contactos: Datos[]; 

  constructor(){
    this.contactos = [];
  }

  addContacto(contacto: Datos): void{
    this.contactos.push(contacto);
  }
}
