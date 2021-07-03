import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuario: any;
  borrar : any;

  constructor(public usuService: UsuarioService, public alert: AlertController) { }
  async deleteAlertConfirm(cont: number) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar Contacto',
      message: '<strong>Deseas eliminar de forma permanente el contacto?</strong> ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('presiono cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('presiono enter');
            this.usuService.usuarios.splice(cont, 1)
            if (this.usuService.usuarios.length <= 0) {
              this.usuService.activar = false
            }
          }
        }
      ]
    });
    await alert.present();

  }
}
