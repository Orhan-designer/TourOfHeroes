import { HeroService } from './../hero.service';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { InMemoryDataService } from '../in-memory-data.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private data: InMemoryDataService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  /* @Input() id?: number; */

  hero!: Hero | any;
  editChange: any = [];
  edit = false;
  delete = false;

  heroClass = [
    'Warrior', 'Death Knight', 'Paladin', 'Druid', 'Shaman', 'Roque', 'Demon Hunter',
    'Priest', 'Mage', 'Warlock', 'Hunter', 'Monk'
  ];

  heroRace = [
    'Orc', 'Tauren', 'Undead', 'Troll', 'Blood Elf', 'Goblin', 'Pandaren', 'Human',
    'Night Elf', 'Dwarf', 'Draenei', 'Worgen', 'Gnome'
  ];

  power = [
    'Strength', 'Agility', 'Stamina',
    'Intellect', 'Defence', 'Critical Strike', 'Spell combat', 'Versatility'
  ];

  openDialog() {
    let dialogRef = this.dialog.open(PopUpComponent, {
      data: {
        deleted: 'Do you really want to delete the hero?',
        yes: 'Yes',
        no: 'No'
      }
    })
    dialogRef.afterClosed().subscribe((response) => {
      const index = this.data.heroes.indexOf(this.hero);
      if (response == 'true') {
        this.data.heroes.splice(index, 1);
        this.router.navigate(['/heroes']);
      }
    });
  }

  ngOnInit(): void {
    this.getHero()
    this.editChange = this.fb.group(this.hero)
    console.log(typeof this.editChange)
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.hero = this.data.heroes.find(u => u.id == id);
  }

  goBack(): void {
    this.location.back();
  }

  onEditChanges(): void {
    this.edit = true;
    const index = this.data.heroes.findIndex((el) => el.id == this.hero.id);
    this.data.heroes[index] = this.editChange.value;
    this.router.navigate(['/hero/edit', this.hero.id])
  }
}
