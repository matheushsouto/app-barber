import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {snapshotToArray} from '../news/news.page';

@Component({
    selector: 'app-my-schedule',
    templateUrl: './my-schedule.page.html',
    styleUrls: ['./my-schedule.page.scss'],
})
export class MySchedulePage implements OnInit {

    schedules;
    uid;

    constructor() {
    }

    ngOnInit() {
        this.uid = firebase.auth().currentUser.uid;
        this.loadSchedules();
    }

    /**
     * Load schedules saved.
     */
    loadSchedules() {
        const schedule = firebase.database().ref().child('mySchedules/').orderByChild('uid').equalTo(this.uid);
        schedule.on('value', resp => {
            this.schedules = [];
            this.schedules = snapshotToArray(resp);
        });
    }

}
