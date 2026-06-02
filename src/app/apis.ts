import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Apis {


  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get<{ datos: Tarea[] }>('http://localhost:3000/tareas');
  }

  completarTarea(idTarea: number) {
    const body = { id: idTarea };
    return this.http.post<{ datos: Tarea[] }>(
      'http://localhost:3000/tareas/cambiar_completado',
      body
    );
  }
}
