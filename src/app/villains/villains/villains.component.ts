import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Villain } from '../../core';
import { VillainService } from '../villain.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$: Observable<Villain[]>;
  loading$: Observable<boolean>;

  constructor(private villainService: VillainService) {
    this.villains$ = villainService.entities$;
  }

  ngOnInit() {
    this.getVillains();
  }

  add(hero: Villain) {
    this.villainService.add(hero);
  }

  delete(hero: Villain) {
    this.villainService.delete(hero);
    this.close();
  }

  close() {
    this.selected = null;
  }

  getVillains() {
    this.villainService.getAll();
    this.close();
  }

  update(hero: Villain) {
    this.villainService.update(hero);
  }

  enableAddMode() {
    this.selected = null;
  }

  select(villain: Villain) {
    this.selected = <any>{};
  }
}
