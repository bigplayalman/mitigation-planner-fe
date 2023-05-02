import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerComponent } from './planner.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlannerComponent,
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class PlannerModule { }
