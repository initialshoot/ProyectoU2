import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UsuarioService } from '../servicios/usuario.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Contactos : any;
  valor : any;
 
  constructor(public usuService: UsuarioService, public alert: AlertController) {}
  async presentarDatos(indice) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'CONTACTOS'+ (indice+1),
      message: '<strong>NOMBRE: </strong> '+ this.Contactos[indice].nombre+
      '<br><strong>TELEFONO: </strong>'+ this.Contactos[indice].telefono+
      '<br><strong>EMAIL: </strong>'+ this.Contactos[indice].email+
      '<br><strong>NOTAS: </strong>'+ this.Contactos[indice].notas,  
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('SE PRESIONO CANCELAR');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('presiono cancelar');
          }
        }
      ]
    });
    await alert.present();
  }



}
