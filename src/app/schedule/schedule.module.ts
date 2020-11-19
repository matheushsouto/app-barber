import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SchedulePageRoutingModule} from './schedule-routing.module';
import {SchedulePage} from './schedule.page';
import {CalendarModule} from 'ion2-calendar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SchedulePageRoutingModule,
        CalendarModule
    ],
    declarations: [SchedulePage]
})
export class SchedulePageModule {
}
