import { Component, Input } from '@angular/core';


@Component({
  selector: 'movie-info',
  templateUrl: 'movie-info.html'
})
export class MovieInfoComponent {
 
  @Input() movieName: string = 'Sin nombre';
  constructor() {}

}
