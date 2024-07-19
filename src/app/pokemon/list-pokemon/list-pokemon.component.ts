import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../moc-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList : Pokemon[] = POKEMONS;

  constructor( private router: Router) {}

  viewDetail(pokemon: Pokemon){
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
  
}
