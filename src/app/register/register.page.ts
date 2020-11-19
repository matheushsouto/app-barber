import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    loginForm: FormGroup;
    uid;

    constructor(
        private angularFireAuth: AngularFireAuth,
        private formbuilder: FormBuilder,
        private route: Router
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
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            phone: [null, [Validators.required]],
            uid: this.uid
        });
    }

    /**
     * Register user to system.
     */
    register() {
        console.log(this.loginForm.get('email').value);
        this.uid = this.angularFireAuth.createUserWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value).then(function(userRecord) {
            return userRecord.user.uid;
        });
        const requestUid = {
            name: this.loginForm.get('name').value,
            phone: this.loginForm.get('phone').value,
            email: this.loginForm.get('email').value,
            acessLevel: 'barber',
            uid: this.uid,
        };

        const saveUser = firebase.database().ref('users/').push().set(requestUid);
        this.route.navigate(['/home']);
    }

    /**
     * Redirect view initial.
     */
    goBack() {
        this.route.navigate(['/']);
    }

}
