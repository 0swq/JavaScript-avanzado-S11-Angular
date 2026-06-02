import { Component, inject, signal } from '@angular/core';
import { Apis } from '../apis';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

@Component({
  selector: 'app-lista-tarea',
  imports: [],
  templateUrl: './lista-tarea.html',
  styleUrl: './lista-tarea.css',
})
export class ListaTarea {


  tareas = inject(Apis);


  res = signal<Tarea[]>([]);

  _ = this.tareas.obtenerDatos().subscribe({
    next: (data: { datos: Tarea[] }) => this.res.set(data.datos),
  });

  cambiarCompletado(idTarea: number) {
    this.tareas.completarTarea(idTarea).subscribe({
      next: (data: { datos: Tarea[] }) => this.res.set(data.datos),
    });
  }
}
