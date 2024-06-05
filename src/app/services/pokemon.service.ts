import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private mockableURL ="http://demo8304640.mockable.io/"
  constructor(private http: HttpClient) { 
  }

  estados:Pokemon[] = [];

  listar():Observable<Pokemon[]>{
  
    return this.http.get<Pokemon[]>(this.mockableURL) as Observable<Pokemon[]>;
  } 
}
