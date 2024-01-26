import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShopService } from '../../services/shop.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ShopViewComponent } from '../shop-view/shop-view.component';
import { sequenceEqual } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterModule, ShopViewComponent],
  providers: [HttpClient],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css'
})
export class ShopListComponent implements OnInit {

  shopList: Shop[] = [];
  searchMode: boolean = false;

  constructor(private shopService: ShopService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listShops();
    });
  }

  listShops() {

    this.searchMode = this.route.snapshot.paramMap.has(`keyword`);
    
    if (this.searchMode) {
      this.handleSearchShops();
    } else {
      this.handleListShops();
    }
    
  }

  handleSearchShops() {
    
    const theKeyword: string = this.route.snapshot.paramMap.get(`keyword`) ?? "";

    this.shopService.searchShops(theKeyword).subscribe(
      data => {
        this.shopList = data;
      }
    );
  }

  handleListShops() {
    this.shopService.getShopList().subscribe(
      data => {
        this.shopList = data;
      }
    )
  }
}
