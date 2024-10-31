import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() imageSource!: string;
}
