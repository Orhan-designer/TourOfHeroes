import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.less']
})
export class HeroCreateComponent implements OnInit {
  heroes: Hero[] = []

  name: any[] = [];

  userAge: any[] = [];
  
  heroLevel: number[] = [];

  heroClass: string[] = [
    'Warrior', 'Death Knight', 'Paladin', 'Druid', 'Shaman', 'Roque', 'Demon Hunter',
    'Priest', 'Mage', 'Warlock', 'Hunter', 'Monk'
  ];

  heroRace:  string[] = [
    'Orc', 'Tauren', 'Undead', 'Troll', 'Blood Elf', 'Goblin', 'Pandaren', 'Human',
    'Night Elf', 'Dwarf', 'Draenei', 'Worgen', 'Gnome'
  ];

  powers: string[] = [
    'Strength', 'Agility', 'Stamina',
    'Intellect', 'Defence', 'Critical Strike', 'Spell combat', 'Versatility'
  ];

  alterEgo:  string[] = ['Chuck Over street'];

  model = new Hero(0, '', '');

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    this.heroService.addHero( {model: this.model} as unknown as Hero)
      .subscribe(() => {
        this.heroes.push(this.model)
        console.log(this.heroes)
      });

  }

  newHero() {
    this.model = new Hero(33, '', '');
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void { 
    
  }
}
