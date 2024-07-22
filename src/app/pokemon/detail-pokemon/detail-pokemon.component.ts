import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../moc-pokemon-list';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;
  constructor(
    private route : ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(){
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToHome(){
    this.router.navigate(['/pokemons']);
  }   
}
