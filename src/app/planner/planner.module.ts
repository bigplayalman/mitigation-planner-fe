import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerComponent } from './planner.component';
import { MechanicFormComponent } from './mechanic-form/mechanic-form.component';


@NgModule({
  declarations: [
    PlannerComponent,
    MechanicFormComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PlannerModule { }
