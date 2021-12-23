import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { Hero } from '../hero';
import { InMemoryDataService } from '../in-memory-data.service';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent {
  displayedColumns: string[] = ['id', 'name', 'userAge', 'heroLevel', 'alterEgo', 'heroClass', 'heroRace', 'power', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.heroesData.heroes)

  constructor(private router: Router, public heroesData: InMemoryDataService, private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  delete(hero: Hero): void {
    const index = this.heroesData.heroes.findIndex((el) => el.id == hero.id)
    this.heroesData.heroes.splice(index, 1);
  }

  edit(hero: Hero){
    this.router.navigate([`/hero`], {queryParams: {id: hero.id}})
  }
}
