import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor(public name: string,public state = 'inactive') { }

}
