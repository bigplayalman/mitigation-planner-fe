import { Component, OnInit } from '@angular/core';
import { P8sPart1Service } from '../mechanics/p8s-part1.service';

interface IMechanic {
  name: string;
  start: string;
  end: string;
  damageType: string;
  damageActor: string;
  mitigations: any;
}

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  boss: string = "Hephaistos";
  players: string[] = ['PLD', 'DRK', 'WHM', 'SCH', 'NIN', 'SAM', 'DNC', 'SMN'];
  mechanics: IMechanic[] = [];

  constructor(private p8sPart1: P8sPart1Service) { }

  ngOnInit(): void {
    this.mechanics = this.p8sPart1.mechanics.map(mechanic => {
      return {
        ...mechanic,
        mitigations: {}
      }
    });
  }

}
