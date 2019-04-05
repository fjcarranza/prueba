import { Component } from '@angular/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  lordOfTheRings = {
    name: ''
  };
  constructor() {}
    
  ngOnInit() {
      this.lordOfTheRings.name='Lord of The Rings';
  }
}
