import { Injectable } from '@angular/core';
import { get } from 'http';
import { Pokemon } from './pokemon';
import { POKEMONS } from './moc-pokemon-list';

@Injectable()
export class PokemonService {

  getPokemonList():Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(id:number):Pokemon | undefined{
    return POKEMONS.find(pokemon => pokemon.id == id);
  }

  getPokemonTypeList():string[]
  {
    return ['Plante','Feu','Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy' ];
  }

}
