import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DogComponent } from './dog/dog.component';
import { PhotographyComponent } from './photography/photography.component';
import { AuthorComponent } from './author/author.component';
import { GuitarComponent } from './guitar/guitar.component';



@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    DogComponent,
    PhotographyComponent,
    AuthorComponent,
    GuitarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
