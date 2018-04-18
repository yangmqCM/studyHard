import { Pipe, PipeTransform } from '@angular/core';
import { Flyer} from './hero';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
@Pipe({
  name: 'flyHeroesImpure',
  pure:false
})
export class FlyHeroesImpurePipe implements FlyingHeroesPipe { }
