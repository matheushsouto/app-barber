import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import * as firebase from 'firebase';
import {snapshotToArray} from '../news/news.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    type: 'string';
    calendar;
    dates;


    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    onChange($event) {
        console.log($event);
    }

    checkCallendar() {
        const data = moment(this.calendar).format('YYYY-MM-DD');
        this.router.navigate(['available-times/', data]);
    }
}
