import { NgModule } from '@angular/core';
import { HomeContentComponent } from './home-content/home-content';
import { MovieInfoComponent } from './movie-info/movie-info';
@NgModule({
	declarations: [HomeContentComponent,
    MovieInfoComponent],
	imports: [],
	exports: [HomeContentComponent,
    MovieInfoComponent]
})
export class ComponentsModule {}
