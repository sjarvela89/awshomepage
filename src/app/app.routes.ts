import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogComponent } from './dog/dog.component';
import { PhotographyComponent } from './photography/photography.component';
import { AuthorComponent } from './author/author.component';
import { GuitarComponent } from './guitar/guitar.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
    {path:'dog', component: DogComponent},
    {path: 'photography', component: PhotographyComponent},
    {path: 'author', component: AuthorComponent},
    {path: 'guitar', component: GuitarComponent}
];
