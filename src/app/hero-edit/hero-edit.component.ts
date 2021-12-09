import { HeroCreateComponent } from './../hero-create/hero-create.component';
import { HeroService } from '../hero.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.less']
})
export class HeroEditComponent implements OnInit {

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

  constructor(public fb: FormBuilder, 
    public heroService: HeroService, 
    private inMemoryDataService: InMemoryDataService,
    private dialog: MatDialog,
    private route: ActivatedRoute, 
    private router: Router,
    ) { }
  
  saveDialog() {
    this.dialog.open(PopUpComponent, {
      data: {
        save: 'Saved successfully',
      }
    });
    this.router.navigate(['/heroes']);
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.hero = heroes.find((hero) => hero.id == this.route.snapshot.params['id']);
        if (this.hero){
          this.editForm = this.fb.group(this.hero); 
          this.showForm = true;
        } else {
          /* this.warn = 'User not found'; */
        }
      });
  }

  saveChanges() {
    const heroIndex = this.inMemoryDataService.heroes.findIndex(hero => hero.id === this.hero.id)
    this.inMemoryDataService.heroes[heroIndex] = this.editForm.value;
  }
}
