import { HeroService } from './../hero.service';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.less']
})
export class HeroEditComponent implements OnInit {
  @Input() id?: number;

  editForm: any;
  showForm: boolean = false;
  warn: any = false;
  hero: any;

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

  constructor(public fb: FormBuilder, public heroService: HeroService, private inMemoryDataService: InMemoryDataService) { }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.hero = heroes.find((hero) => hero.id == this.id);
        if (this.hero){
          this.editForm = this.fb.group(this.hero);
          this.showForm = true; 
        } else {
          this.warn = 'User not found';
        }
      });
  }

  saveChanges() {
    const heroIndex = this.inMemoryDataService.heroes.findIndex(hero => hero.id === this.hero.id)
    this.inMemoryDataService.heroes[heroIndex] = this.editForm.value;
  }

}