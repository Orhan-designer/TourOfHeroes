import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent {
  heroId: any = null;

  constructor(private router: Router, public heroesData: InMemoryDataService) { }

  delete(hero: Hero): void {
    const index = this.heroesData.heroes.findIndex((el) => el.id == hero.id)
    this.heroesData.heroes.splice(index, 1);
  }

  edit(hero: Hero){
    this.router.navigate([`/hero`], {queryParams: {id: hero.id}})
  }
}
