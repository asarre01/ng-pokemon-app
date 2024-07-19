import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class=" h-screen w-full overflow-hidden flex items-center justify-center">
      <div class="text-center">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png   " alt="404" class="w-40 h-40 mx-auto mb-4">
        <h1 class="text-6xl font-bold text-gray-800">404</h1>
        <h2 class="text-2xl font-semibold text-red-500">Page not found</h2>
        <p class="text-lg text-gray-800">Sorry, the page you're looking for doesn't exist.</p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" routerLink="/pokemons">Go to Home</button>
      </div>>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {

}
