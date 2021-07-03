import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Array<any>
  activar:boolean
  fun:boolean
  usuario={
    nombre:null,
    telefono:null,
    email:null,
    notas:null,
  }

  constructor() {
    this.usuarios=[]
    this.activar=false
   }

   adir(){
    let newusuario = {
      nombre : this.usuario.nombre,
      notas : this.usuario.notas,
      telefono : this.usuario.telefono,
      email : this.usuario.email
    }
    this.usuarios.push(newusuario)
   }

   borrar(){
     this.usuarios.pop()
   }

   act(){
     this.activar = true
   }
}