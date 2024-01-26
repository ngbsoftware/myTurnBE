import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { HttpClient } from '@angular/common/http';
import { ShopViewComponent } from './components/shop-view/shop-view.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShopListComponent, ShopViewComponent, RouterLink, SearchComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myTurnWeb';
}
