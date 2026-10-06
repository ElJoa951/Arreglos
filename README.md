<div class="card h-100 shadow-sm">
  <img [src]="pokemon.imagen" class="card-img-top p-3" [alt]="pokemon.nombre">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title text-capitalize">{{ pokemon.nombre }}</h5>
    <div class="mb-2">
      @for (tipo of pokemon.tipos; track tipo) {
        <span class="badge bg-secondary me-1">{{ tipo }}</span>
      }
    </div>
    <p class="card-text small text-muted mb-3">
      Altura: {{ pokemon.altura / 10 }} m | Peso: {{ pokemon.peso / 10 }} kg
    </p>
    <button 
      type="button"
      class="btn mt-auto" 
      [ngClass]="esFavorito ? 'btn-warning' : 'btn-outline-warning'"
      (click)="toggleFavorito()">
      {{ esFavorito ? '★ En Favoritos' : '☆ Agregar a Favoritos' }}
    </button>
  </div>
</div>
