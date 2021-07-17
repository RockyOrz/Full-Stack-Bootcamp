import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit,
} from '@ionic-native/local-notifications/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private emailComposer: EmailComposer,
    private sms: SMS,
    private localNotifications: LocalNotifications,
    private alertCtrl: AlertController
  ) {
    

  }

  goToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  composeEmail() {
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  sendSMS() {
    this.sms.send('124124312342', 'asdasdf');
    alert('successfully send SMS');
  }

  getAftertenseconds() {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: null
   });
  }
}
