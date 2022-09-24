import { Component, OnInit } from '@angular/core';
import { IMechanic, MechanicsService } from 'src/app/services/mechanics.service';

@Component({
  selector: 'app-mechanic-form',
  templateUrl: './mechanic-form.component.html',
  styleUrls: ['./mechanic-form.component.scss']
})
export class MechanicFormComponent implements OnInit {
  current!: IMechanic | null;
  constructor(private mechanicsService: MechanicsService) { }

  ngOnInit(): void {
    this.mechanicsService.selectedMechanic.subscribe((mechanic) => {
      this.current = mechanic;
    })
  }

  closeForm(): void {
    this.mechanicsService.setMechanic(null);
  }

}
