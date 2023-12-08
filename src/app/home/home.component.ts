import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from '../coin/coin.component';
import { Coin } from '../coin';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CoinComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by symbol">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-coin [coin]="coin"></app-coin>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then(console.log);
  }

  coin: Coin = {
    id: "01coin",
    symbol: "zoc",
    name: "01coin",
  };
}
