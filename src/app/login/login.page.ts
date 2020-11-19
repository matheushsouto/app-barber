import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

    constructor(
        private angularFireAuth: AngularFireAuth,
        private formbuilder: FormBuilder,
        private route: Router,
        public navCtrl: NavController
    ) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    /**
     * Initialize form.
     */
    initializeForm() {
        this.loginForm = this.formbuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]]
        });
    }

    /**
     * Auth system.
     */
    login() {
        this.angularFireAuth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value).then(resp => {
            console.log(resp);
            this.navCtrl.navigateRoot('home');
        }).catch(error => {
            console.log(error);
        });
    }

    /**
     * Register new user.
     */
    register() {
        this.route.navigate(['/register']);
    }

    forgotPassword() {
        console.log('Entrou aqui');
        this.route.navigate(['/forgot-password']);
    }
}
