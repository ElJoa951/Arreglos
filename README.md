<div class="container py-4">
  <h1 class="mb-4">Catálogo de Pokémon</h1>

  <div class="row mb-4">
    <div class="col-md-6">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar Pokémon por nombre..." 
        [(ngModel)]="busqueda">
      <small class="text-muted mt-1 d-block">
        Resultados encontrados: {{ pokemonsFiltrados.length }}
      </small>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
    @for (pokemon of pokemonsFiltrados; track pokemon.id) {
      <div class="col">
        <app-pokemon-card 
          [pokemon]="pokemon"
          [esFavorito]="esFavorito(pokemon)"
          (favoritoToggled)="onFavoritoToggled($event)">
        </app-pokemon-card>
      </div>
    } @empty {
      <div class="col-12">
        <p class="alert alert-info">No se encontraron Pokémon con ese nombre.</p>
      </div>
    }
  </div>

  @if (favoritos.length > 0) {
    <section class="border-top pt-4">
      <h2 class="h4 mb-3">Mis Favoritos ({{ favoritos.length }})</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        @for (fav of favoritos; track fav.id) {
          <div class="col">
            <app-pokemon-card 
              [pokemon]="fav"
              [esFavorito]="true"
              (favoritoToggled)="onFavoritoToggled($event)">
            </app-pokemon-card>
          </div>
        }
      </div>
    </section>
  }
</div>
