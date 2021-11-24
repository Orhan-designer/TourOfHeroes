import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', userAge: 23, heroLevel: 45, alterEgo: 'Destroyer', heroClass: 'Warrior', heroRace: 'Orc', power: 'Strength'},
      { id: 12, name: 'Narco', userAge: 42, heroLevel: 33, alterEgo: 'Saver', heroClass: 'Shaman', heroRace: 'Troll', power: 'Agility' },
      { id: 13, name: 'Bombasto', userAge: 15, heroLevel: 75, alterEgo: 'Protector', heroClass: 'Paladin', heroRace: 'Blood Elf', power: 'Defence' },
      { id: 14, name: 'Celeritas', userAge: 28, heroLevel: 27, alterEgo: 'Damager', heroClass: 'Hunter', heroRace: 'Tauren', power: 'Critical Strike' },
      { id: 15, name: 'Magneta', userAge: 37, heroLevel: 98, alterEgo: 'Healer', heroClass: 'Priest', heroRace: 'Human', power: 'Stamina' },
      { id: 16, name: 'RubberMan', userAge: 20, heroLevel: 23, alterEgo: 'Warlock', heroClass: 'Warlock', heroRace: 'Worgen', power: 'Intellect' },
      { id: 17, name: 'Dynama', userAge: 30, heroLevel: 49, alterEgo: 'Mage', heroClass: 'Mage', heroRace: 'Gnome', power: 'Intellect' },
      { id: 18, name: 'Dr IQ', userAge: 58, heroLevel: 87, alterEgo: 'Demon Hunter', heroClass: 'Demon Hunter', heroRace: 'Night Elf', power: 'Combat Damage' },
      { id: 19, name: 'Magma', userAge: 48, heroLevel: 77, alterEgo: 'Monk', heroClass: 'Monk', heroRace: 'Pandaren', power: 'Defence' },
      { id: 20, name: 'Tornado', userAge: 29, heroLevel: 39, alterEgo: 'Druid', heroClass: 'Druid', heroRace: 'Troll', power: 'Strength' },
    ];
    
    return { heroes }
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() {}
}
