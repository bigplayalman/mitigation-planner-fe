import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'

import { PlanCardComponent } from './plan-card/plan-card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PlanCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    PlanCardComponent
  ]
})
export class SharedModule { }
