import { Routes } from '@angular/router';
import { ShopViewComponent } from './components/shop-view/shop-view.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';

export const routes: Routes = [
    {path: 'search/:keyword', component: ShopListComponent},
    {path: 'shops/:id', component: ShopViewComponent},
    {path: 'shops', component: ShopListComponent},
    {path: '', redirectTo: '/shops', pathMatch: 'full'},
    {path: '**', redirectTo: '/shops', pathMatch: 'full'}
];
