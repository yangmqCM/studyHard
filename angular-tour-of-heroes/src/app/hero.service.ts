import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HeroService { 
	private heroesUrl = 'api/heroes';
	
  constructor(private messageService: MessageService,
  						private http: HttpClient ) { }
  
	getHeroes(): Observable<Hero[]> { 
		//this.messageService.add('HeroService: fetched heroes ');
    //return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
    	tap(heroes => this.log('fetched heroes')),
    	catchError(this.handleError('getHeroes',[]))
    );
  }
	getHero(id: number): Observable<Hero>{
		//this.messageService.add('HeroService: fetched hero id=${id}');
		//return of(HEROES.find(hero => hero.id ===id))
		const url = '${this.heroesUrl}/{$id}';
		return this.http.get<Hero>(url).pipe(
			tap(_ => this.handleError<Hero>('getHero id=${id}')),
			catchError(this.handleError<Hero>('getHero id=${id}'))
		);
		
	}
	getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }
	
	private log(message: string){
		this.messageService.add('HeroService:' +message);
	}
	
	private handleError<T> (operation = 'operation',result?:T){
		return(error: any): Observable<T> =>{
			console.error(error);
			this.log('${operation} falied:${error.message}');
			return of(result as T);
		};
	}
	
	addHero (hero: Hero): Observable<Hero>{
		return this.http.post<Hero>(this.heroesUrl,hero,httpOptions).pipe(
			tap((hero: Hero) => this.log('added hero w/ id=${hero.id}')),
			catchError(this.handleError<Hero>('addHero'))
		)
	}
 
	deleteHero (hero: Hero | number): Observable<Hero> {
	  const id = typeof hero === 'number' ? hero : hero.id;
	  const url = `${this.heroesUrl}/${id}`;
	
	  return this.http.delete<Hero>(url, httpOptions).pipe(
	    tap(_ => this.log(`deleted hero id=${id}`)),
	    catchError(this.handleError<Hero>('deleteHero'))
	  );
}
	 updateHero(hero: Hero): Observable<any>{
	 	return this.http.put(this.heroesUrl,hero,httpOptions).pipe(
	 		tap(_ => this.log('update hero id=${hero.id}')),
	 		catchError(this.handleError<any>('updateHero'))
	 	);
	 }
	 
	 searchHeroes(term: string): Observable<Hero[]>{
	 	 if(!term.trim()){
	 	 	return of([]);
	 	 }
	 	 return this.http.get<Hero[]>('api/hero/?name=${term}').pipe(
	 	 	tap(_ => this.log('found heroes matching "${term}"')),
	 	 	catchError(this.handleError<Hero[]>('searchHeroes',[]))
	 	 );
	 }
}
