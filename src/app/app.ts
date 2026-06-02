import { Component} from '@angular/core';
import { ListaTarea } from './lista-tarea/lista-tarea';



@Component({
  selector: 'app-root',
  imports: [ListaTarea],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
