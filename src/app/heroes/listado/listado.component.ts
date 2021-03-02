import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Viuda Negra','Capitán América','Spiderman','Ironman','Thor','Hulk'];
  heroeBorrado: string = '';
  borrarHeroe() {
    // Opcion 1:
    this.heroeBorrado = this.heroes.shift() || '';
    /* Opcion 2: Eliminar elementos del array
    ** this.heroes.splice(0,1);
    ** Opcion 3: Crear variable con un nuevo array
    ** let heroesNuevoArr = this.heroes.slice(1);
    ** this.heroes = heroesNuevoArr;
    */
  }
}
