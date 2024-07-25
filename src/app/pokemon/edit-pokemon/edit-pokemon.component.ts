import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  template: `
   <h1 class=" text-2xl font-bold py-2 w-full text-center ">Editer {{pokemon?.name}}</h1>
   <div *ngIf="pokemon" class=" w-full h-full">
      <img [src]="pokemon.picture" [alt]="pokemon.name" class="w-40 h-40 mx-auto" />
   </div>
   <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor( 
    private route: ActivatedRoute,
    private pokemonService: PokemonService,) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }

}
