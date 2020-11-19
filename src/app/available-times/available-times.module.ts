import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableTimesPageRoutingModule } from './available-times-routing.module';

import { AvailableTimesPage } from './available-times.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableTimesPageRoutingModule
  ],
  declarations: [AvailableTimesPage]
})
export class AvailableTimesPageModule {}
