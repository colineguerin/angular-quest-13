import { Component } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokemons = this.pokedexService.getPokemons();
  }

  onPokemonClick(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
