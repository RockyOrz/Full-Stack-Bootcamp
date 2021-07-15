import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private emailComposer: EmailComposer) {}

  goToAbout(){
    this.navCtrl.navigateForward('/about');
  }

  composeEmail() {
    const email = {
      to: 'info@robogarden.ca',
      subject: 'Test email',
      body: 'My email content',
      isHTML: true
    }

    this.emailComposer.open(email);
  }

}
