import { Component } from '@angular/core';
import { LearnMorePage } from '../learn-more/learn-more';
import { SignupPage } from '../signup/signup';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/auth";
import { AlertController, LoadingController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  learnMorePage = LearnMorePage;
  signupPage = SignupPage;

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController){}

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }
}
