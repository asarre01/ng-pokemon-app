import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemonList : Pokemon[] = [];

  constructor( 
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(){
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  viewDetail(pokemon: Pokemon){
    let link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
  
}
