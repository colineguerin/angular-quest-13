import { Component } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent {
  
  pokemon: Pokemon = new Pokemon('', '', '');
  createPokemonForm: any;

constructor(private pokedexService: PokedexService) {}

  addPokemon(): void {
    const { name, imageUrl, description } = this.pokemon;
    const pokemon = new Pokemon(name, imageUrl, description);
    this.pokedexService.addPokemon(this.pokemon);
  }
}
