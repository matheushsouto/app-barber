import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';
import {snapshotToArray} from '../news/news.page';
import {AlertController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-available-times',
    templateUrl: './available-times.page.html',
    styleUrls: ['./available-times.page.scss'],
})
export class AvailableTimesPage implements OnInit {
    date;
    dates;
    hours;
    uid;
    mySchedule = firebase.database().ref('mySchedules/');

    constructor(
        private route: ActivatedRoute,
        private alertController: AlertController,
        private afAuth: AngularFireAuth,
        private router: Router
    ) {
        this.uid = firebase.auth().currentUser.uid;
        this.date = this.route.snapshot.paramMap.get('date');
        this.loadDates(this.date);
    }

    ngOnInit() {

    }

    /**
     * Load hours saved.
     */
    loadHours() {
        const refHours = firebase.database().ref('hours').on('value', resp => {
            this.hours = [];
            this.hours = snapshotToArray(resp);
            this.hours.forEach(hour => {
                this.dates.forEach(function(date, i) {
                    if (hour.key === date.hour) {
                        date.startTime = hour.startTime;
                        date.endTime = hour.endTime;
                    }
                });
            });
        });
    }

    /**
     * Load dates saved.
     * @param date
     */
    loadDates(date) {
        const refDates = firebase.database().ref().child('dates/').orderByChild('dateSelected').equalTo(date);
        refDates.on('value', resp => {
            snapshotToArray(resp).forEach(item => {
                if (item.available) {
                    this.dates = snapshotToArray(resp);
                    this.loadHours();
                }
            });
        });
    }

    /**
     * Confirm schedule.
     * @param messageAlert
     * @param date
     */
    async presentAlertConfirm(messageAlert, date) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Atenção!',
            message: messageAlert,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Confirmar',
                    handler: () => {
                        const schedule = {
                            date: date.dateSelected,
                            dateKey: date.key,
                            startTime: date.startTime,
                            endTime: date.endTime,
                            uid: this.uid
                        };
                        this.mySchedule.push().set(schedule);
                        firebase.database().ref().child('dates/' + date.key).update({available: false});
                        this.router.navigate(['/my-schedule']);
                    }
                }
            ]
        });

        await alert.present();
    }

    /**
     * Hours selected.
     * @param date
     */
    selectHour(date) {
        this.presentAlertConfirm('Você realmente deseja marcar esse horário?', date).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }
}
