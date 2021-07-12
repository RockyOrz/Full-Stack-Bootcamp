import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    public alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Term',
      subHeader: 'Security',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            console.log('User clicked on agree');
          },
        },
        {
          text: 'Disagree',
          handler: () => {
            console.log('User clicked on disagree');
          },
        },
      ],
    });

    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
