import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToDog() {
    this.router.navigate(['/dog']);
  }

  navigateToPhotography() {
    this.router.navigate(['/photography']);
  }

  navigateToAuthor() {
    this.router.navigate(['/author']);
  }

  navigateToGuitar() {
    this.router.navigate(['/guitar']);
  }
}
