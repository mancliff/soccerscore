import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsModalPageRoutingModule } from './stats-modal-routing.module';

import { StatsModalPage } from './stats-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsModalPageRoutingModule
  ],
  declarations: [StatsModalPage]
})
export class StatsModalPageModule {}
