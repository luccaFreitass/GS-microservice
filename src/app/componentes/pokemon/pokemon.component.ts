import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/Pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemons:Pokemon[] = [];
  pokemonForm: FormGroup = new FormGroup({});
  
    constructor(private pokemonService:PokemonService, private formBuilder: FormBuilder){
     
    }
    
    listar():void{
      this.pokemonService.listar().subscribe((listaPokemon
        
      ) => (this.pokemons = listaPokemon));
    }
  
  
    ngOnInit():void{
      this.listar();
    }
}
