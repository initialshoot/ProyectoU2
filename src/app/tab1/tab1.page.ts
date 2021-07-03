import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {


  persona: any;

  constructor(public usuService: UsuarioService, public alert: AlertController) {
    this.persona = usuService.usuarios
  }

  async agregar() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Éxito',
      message: '<strong>Se añadió el contacto</strong> ',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('presiono enter');
          }
        }
      ]
    });

    await alert.present();
  }
}