import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h1 class=" text-2xl font-bold py-2 w-full text-center ">Ajouter un Pokemon</h1>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
 `,
  styles: ``
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  ngOnInit(): void {
      this.pokemon = new Pokemon();
  }

}
