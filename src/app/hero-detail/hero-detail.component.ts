import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

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
  @Input() id?: number;

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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private data: InMemoryDataService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  saveDialog() {
    this.dialog.open(PopUpComponent, {
      data: {
        edit: 'Editing was successful'
      }
    })
    /* this.goBack(); */
  }

  deleteDialog() {
    this.dialog.open(PopUpComponent, {
      data: {
        deleted: 'Do you really want to delete the hero?'
      }
    })
  }

  ngOnInit(): void {
    this.getHero()
    this.editChange = this.fb.group(this.hero)
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
    /* this.goBack(); */
  }

  deletedHero(): void {
    const index = this.data.heroes.findIndex((el) => el.id == this.hero.id);
    this.data.heroes.splice(index, 1);
    this.dialog.open(PopUpComponent)
    console.log(this.data.heroes)
  }
}
