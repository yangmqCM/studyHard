export class Hero {
	id:number;
	name:string;
	emotion?:string;
}

export const heroes:Hero[]=[
  { id: 1, name: 'Mr. Nice',  emotion: 'happy'},
  { id: 2, name: 'Narco',     emotion: 'sad' },
  { id: 3, name: 'Windstorm', emotion: 'confused' },
  { id: 4, name: 'Magneta'}
]

export interface Flyer {canFly:boolean}
export const HEROES = [
 {name: 'Windstorm', canFly: true},
  {name: 'Bombasto',  canFly: false},
  {name: 'Magneto',   canFly: false},
  {name: 'Tornado',   canFly: true}
]