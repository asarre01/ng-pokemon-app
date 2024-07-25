import { Pokemon } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router'; // Import the Router class

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input()
  pokemon!: Pokemon;

  types: string[] = [];
  isAddForm : boolean = false;

  constructor( private pokemonService : PokemonService, private router: Router) { }

  ngOnInit() {
    // PokemonType List
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add')
  }

  hasType( type: string) : boolean | undefined {
    return this.pokemon && this.pokemon.types && this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (this.pokemon && this.pokemon.types) {
      if (isChecked) {
        this.pokemon.types.push(type);
      } else {
        const index = this.pokemon.types.indexOf(type);
        if (index > -1) {
          this.pokemon.types.splice(index, 1);
        }
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit () {
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon).subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemons', pokemon?.id]));
    } else{
      if (this.pokemon !== undefined) {
        this.pokemonService.updatePokemon(this.pokemon).subscribe(() => this.router.navigate(['/pokemons', this.pokemon?.id]));
      }
    }
  }

}
