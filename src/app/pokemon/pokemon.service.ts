import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';


@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/POKEMONS').pipe(
      tap(pokemonList => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(id:number): Observable<Pokemon |  undefined>{
    return this.http.get<Pokemon>(`api/POKEMONS/${id}`).pipe(
      tap(pokemon => console.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/POKEMONS/?name=${term}`).pipe(
      tap(pokemonList => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }
  
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put<Pokemon>('api/POKEMONS', pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>('api/POKEMONS', pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemon(pokemonId: number|undefined): Observable<null> {
    return this.http.delete(`api/POKEMONS/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any): void {
      console.table(response);
  }

  private handleError (error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList():string[]
  {
    return ['Plante','Feu','Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy' ];
  }

}
