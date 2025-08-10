import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Products Micro Frontend';
  
  products = [
    {
      name: 'Laptop',
      description: 'High-performance laptop for work and gaming',
      price: 1299.99,
      emoji: '💻'
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone with advanced features',
      price: 799.99,
      emoji: '📱'
    },
    {
      name: 'Headphones',
      description: 'Wireless noise-canceling headphones',
      price: 299.99,
      emoji: '🎧'
    },
    {
      name: 'Tablet',
      description: 'Portable tablet for productivity and entertainment',
      price: 599.99,
      emoji: '📱'
    }
  ];
}
