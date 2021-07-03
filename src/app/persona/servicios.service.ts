import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  personas: Array<any>
  activar:boolean
  persona={
    nombre:null,
    telefono:null,
    email:null,
    notas:null,
    sexo:null
  }

  constructor() {
    this.personas=[]
   }

   add(){
    let newPersona = {
      nombre : this.persona.nombre,
      nota : this.persona.notas,
      telefono : this.persona.telefono,
      email : this.persona.email,
      sexo: this.persona.sexo
    }
    this.personas.push(newPersona)
   }

   borrar(){
     this.personas.pop()
   }

   act(){
     this.activar = true
   }
}
