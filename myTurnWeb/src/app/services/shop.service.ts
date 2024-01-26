import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Shop } from '../components/shop-list/shop';
import { Appointment } from '../common/appointment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  private baseUrl = "http://localhost:8080/magic-api/shops";
  private appointmentUrl = ""

  constructor(private httpClient: HttpClient) { }

  getShopList(): Observable<Shop[]> {
    return this.getShops(this.baseUrl);
  }

  getShop(theShopId: number): Observable<Shop> {
    const shopUrl = `${this.baseUrl}/${theShopId}`

    return this.httpClient.get<Shop>(shopUrl);
  }

  searchShops(theKeyword: string): Observable<Shop[]> {
    
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getShops(searchUrl);
  }

  private getShops(searchUrl: string): Observable<Shop[]> {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.shops)
    );
  }

  addAppointment(turn: Appointment) {

  }
}

interface GetResponse {
  _embedded: {
    shops: Shop[];
  }
}