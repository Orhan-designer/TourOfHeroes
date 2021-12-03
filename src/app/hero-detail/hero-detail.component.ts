import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Hero } from '../hero';
import { InMemoryDataService } from '../in-memory-data.service';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {
  hero!: Hero | any;
  editChange: any;
  edit = false;
  delete = false;

  heroClass = [
    'Warrior', 'Death Knight', 'Paladin', 'Druid', 'Shaman', 'Roque', 'Demon Hunter',
    'Priest', 'Mage', 'Warlock', 'Hunter', 'Monk'
  ];

  heroRace: string[] = [
    'Orc', 'Tauren', 'Undead', 'Troll', 'Blood Elf', 'Goblin', 'Pandaren', 'Human',
    'Night Elf', 'Dwarf', 'Draenei', 'Worgen', 'Gnome'
  ];

  power: string[] = [
    'Strength', 'Agility', 'Stamina',
    'Intellect', 'Defence', 'Critical Strike', 'Spell combat', 'Versatility'
  ];

  @Input() id?: number;
  @Input() heroLevel?: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private data: InMemoryDataService,
    private fb: FormBuilder,
    public heroService: HeroService,
  ) { }

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
    this.data.heroes = this.editChange.value;
    this.heroService.updateHero(this.hero) 
      .subscribe(() => this.goBack());
      console.log(this.data.heroes)
    }

    deletedHero(): void {
      const index = this.data.heroes.findIndex((el) => el.id == this.hero.id)
      this.data.heroes.splice(index, 1);
      console.log(this.data.heroes)
    }
   /* save(): void {
    if(this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
    }
  }  */
}
