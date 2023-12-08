import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coin } from '../coin';

@Component({
  selector: 'app-coin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <h2 class="listing-heading">{{ coin.symbol }}</h2>
      <h3>{{ coin.name }}</h3>
    </section>
  `,
  styleUrl: './coin.component.css'
})
export class CoinComponent {
  @Input() coin!: Coin;
}
