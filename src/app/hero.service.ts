// Modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';

// Components + Classes + services
import { Hero } from './hero';
import { MessageService} from './message.service';

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes'; // URL to web API

    private log(message: string){
        this.messageService.add('HeroService: ' + message);
    }

  constructor(private http: HttpClient, private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl);
    }

    getHero(id: number): Observable<Hero> {
        this.messageService.add('HeroService: fetched hero id=${id}');
        return of(HEROES.find(hero => hero.id === id));
    }
}
