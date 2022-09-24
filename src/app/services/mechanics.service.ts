import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMechanic {
  name: string;
  start: string;
  end: string;
  damageType: string;
  damageActor: string;
  mitigations: any;
}
@Injectable({
  providedIn: 'root'
})
export class MechanicsService {
  selectedMechanic = new BehaviorSubject<IMechanic | null>(null)
  constructor() { }

  setMechanic(mechanic: IMechanic | null) {
    this.selectedMechanic.next(mechanic);
  }
}
