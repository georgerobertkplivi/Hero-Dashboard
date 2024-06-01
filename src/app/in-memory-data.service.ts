import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',summary: 'Is a doctor' },
      { id: 13, name: 'Bombasto',summary: 'Is the bomb' },
      { id: 15, name: 'Magneta',summary: 'Is a magnet' },
      { id: 16, name: 'RubberMan',summary: 'Is rubber' },
      { id: 17, name: 'Dynama',summary: 'Is dynamic' },
      { id: 18, name: 'Dr IQ',summary: 'Is a smart doctor' },
      { id: 19, name: 'Magma',summary: 'Is a hot as lava' },
      { id: 20, name: 'Tornado',summary: 'Is a tornado!' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
