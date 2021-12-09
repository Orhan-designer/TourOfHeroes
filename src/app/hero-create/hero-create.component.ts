import { PopUpComponent } from './../pop-up/pop-up.component';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.less']
})

export class HeroCreateComponent implements OnInit {
  constructor(private heroService: HeroService, private dialog: MatDialog, private router: Router) { }

  heroes: Hero[] = []

  name: string[] = [];

  userAge: number[] = [];

  heroLevel: number[] = [];

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

  alterEgo: string[] = ['Chuck Over street'];

  model = new Hero(0, '', '');

  submitted = false;

  heroForm = new FormGroup({
    name: new FormControl(''),
    userAge: new FormControl(''),
    heroLevel: new FormControl(''),
    alterEgo: new FormControl(''),
    heroClass: new FormControl(''),
    power: new FormControl(''),
    heroRace: new FormControl(''),
  });

  newHero = this.heroForm.value;

  createDialog() {
    this.dialog.open(PopUpComponent, {
      data: {
        create: 'Hero created successfully'
      }
    })
  }

  onSubmit(): void {
    this.newHero = this.heroForm.value;
    this.router.navigate([`/heroes`])
    this.submitted = true;
    this.heroService.addHero(this.newHero as Hero)
      .subscribe(() => {
        this.heroes.push(this.model)
      });
  }

  reset(): void {
    this.heroForm.reset();
  }

  ngOnInit(): void {
  }
}
