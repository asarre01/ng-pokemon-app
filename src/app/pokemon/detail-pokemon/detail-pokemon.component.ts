import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../moc-pokemon-list';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList = POKEMONS;
  pokemon: Pokemon|undefined;
  constructor(private route : ActivatedRoute, private router: Router) {

  }

  ngOnInit(){
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    }
  }

  goToHome(){
    this.router.navigate(['/pokemons']);
  }   
}
