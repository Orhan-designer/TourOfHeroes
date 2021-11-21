export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string,
        public heroLevel?: number,
        public userAge?: number,
        public heroClass?: string,
        public heroRace?: string,
        public heroStat?: string,
    ) { }
}