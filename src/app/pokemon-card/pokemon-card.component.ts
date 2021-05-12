import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/_model/Pokemon';

import { Type } from '../../_model/Type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [
    './pokemon-card.component.sass',
    './pokemon-card-type-colors.component.sass',
  ],
})
export class PokemonCardComponent {
  fire = false;

  @Input()
  public pokemon: Pokemon;
  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;

  setClasses() {
    return {
      'pokemon-card__normal': this.pokemon.types[0] === Type.Normal,
      'pokemon-type__grass': this.pokemon.types[0] === Type.Grass,
      'pokemon-type__poison': this.pokemon.types[0] === Type.Poison,
      'pokemon-type__fire': this.pokemon.types[0] === Type.Fire,
      'pokemon-type__water': this.pokemon.types[0] === Type.Water,
      'pokemon-type__electric': this.pokemon.types[0] === Type.Electric,
      'pokemon-type__ice': this.pokemon.types[0] === Type.Ice,
      'pokemon-type__fighting': this.pokemon.types[0] === Type.Fighting,
      'pokemon-type__ground': this.pokemon.types[0] === Type.Ground,
      'pokemon-type__flying': this.pokemon.types[0] === Type.Flying,
      'pokemon-type__psychic': this.pokemon.types[0] === Type.Psychic,
      'pokemon-type__bug': this.pokemon.types[0] === Type.Bug,
      'pokemon-type__rock': this.pokemon.types[0] === Type.Rock,
      'pokemon-type__ghost': this.pokemon.types[0] === Type.Ghost,
      'pokemon-type__dark': this.pokemon.types[0] === Type.Dark,
      'pokemon-type__dragon': this.pokemon.types[0] === Type.Dragon,
      'pokemon-type__steel': this.pokemon.types[0] === Type.Steel,
      'pokemon-type__fairy': this.pokemon.types[0] === Type.Fairy,
    };
  }
}
