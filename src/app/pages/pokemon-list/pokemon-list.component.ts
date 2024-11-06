import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { PokemonService } from '../../core/services/pokemon.service';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  public pokemonResults$!: Observable<PokemonResults>;
  public error: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonResults$ = this.pokemonService.getPokemonList().pipe(
      catchError((error: Error) => {
        this.error = error.message;
        return EMPTY;
      })
    );
  }
}
