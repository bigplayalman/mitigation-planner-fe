import { Component, OnInit } from '@angular/core';
import { P8sPart1Service } from '../services/p8s-part1.service';
import { IMechanic, MechanicsService } from '../services/mechanics.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  boss: string = "Hephaistos";
  players: string[] = ['PLD', 'DRK', 'WHM', 'SCH', 'NIN', 'SAM', 'DNC', 'SMN'];
  mechanics: IMechanic[] = [];

  constructor(private p8sPart1: P8sPart1Service, private mechanicsService: MechanicsService) { }

  ngOnInit(): void {
    this.mechanics = this.p8sPart1.mechanics.map(mechanic => {
      return {
        ...mechanic,
        mitigations: {}
      }
    });
  }

  selectMechanic(mechanic: IMechanic) {
    this.mechanicsService.setMechanic(mechanic);
  }

}
