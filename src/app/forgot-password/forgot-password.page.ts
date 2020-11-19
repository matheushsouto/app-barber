import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.page.html',
    styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
    forgotPassword: FormGroup;

    constructor(
        public alertController: AlertController,
        private angularFireAuth: AngularFireAuth,
        private formbuilder: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    /**
     * Initialize form.
     */
    initializeForm() {
        this.forgotPassword = this.formbuilder.group({
            email: [null, Validators.required, Validators.email]
        });
    }

    /**
     * Alert confirm forgot password.
     * @param messageAlert
     */
    async confirmForgotPassword(messageAlert) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Atenção',
            message: messageAlert,
            buttons: ['OK']
        });

        await alert.present();
    }

    /**
     * Send email to user.
     */
    forgot() {
        this.angularFireAuth.sendPasswordResetEmail(this.forgotPassword.get('email').value).then(resp => {
            this.confirmForgotPassword('O email foi enviado com sucesso!, verifique sua caixa de entrada!');
            this.router.navigate(['/']);
        }).catch(error => {
            this.router.navigate(['/']);
            this.confirmForgotPassword('O email digitado não existe, tente novamente!');
        });
    }
}
