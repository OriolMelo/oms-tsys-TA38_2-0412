import { Component, Input } from '@angular/core';
import { Datos } from '../models/datos.model';

@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {

  @Input() contactos: Datos[] | any;

}
