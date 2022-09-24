import { Component, OnInit } from '@angular/core';
import { MechanicsService } from './services/mechanics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  open = false;
  constructor(private mechanicsService: MechanicsService) {}

  ngOnInit() {
    this.mechanicsService.selectedMechanic.subscribe((mechanic) => {
      this.open = !!mechanic;
    })
  }
}
