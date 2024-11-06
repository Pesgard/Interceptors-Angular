import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  

  getPokemonList(): Observable<PokemonResults> {
      
    return this.http
      .get<PokemonResults>('https://pokeapi.co/api/v2/pokemon')
  }
}
