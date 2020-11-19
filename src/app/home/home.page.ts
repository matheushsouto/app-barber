import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    constructor(
        private router: Router
    ) {
    }

    /**
     * Redirect route to news.
     */
    goToNoticie() {
        this.router.navigate(['/news']);
    }

    /**
     * Redirect route to schedules.
     */
    goToSchedule() {
        this.router.navigate(['/schedule']);
    }

    /**
     * Redirect route to my schedules.
     */
    goToMySchedule() {
        this.router.navigate(['/my-schedule']);
    }
}
