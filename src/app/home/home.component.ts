import { Component } from '@angular/core';
import { Router } from '@angular/router';
import cardData from '../../app/tables/card'; 
import { Card } from '../../app/model/card.model'; // Import the Card type
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent], // Import CommonModule here
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards: Card[] = cardData; // Store card data in a component property

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Navigation method
  navigateTo(screen: string): void {
    this.router.navigate([screen]);
  }
}