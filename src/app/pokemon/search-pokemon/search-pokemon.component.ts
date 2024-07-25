import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]> | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchPokemon(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetailPokemon(pokemon: Pokemon): void {
    const link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }

}
