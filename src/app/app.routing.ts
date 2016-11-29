import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '',                   loadChildren: './routes/home/home.module#HomeModule'}, 
    {path: 'search/:SearchText', loadChildren: './routes/search/search.module#SearchModule'},
    {path: 'route1',             loadChildren: './routes/route1/route1.module#Route1Module'},
    {path: 'route2',             loadChildren: './routes/route2/route2.module#Route2Module'},
    {path: 'route3',             loadChildren: './routes/route3/route3.module#Route3Module'},
    {path: '**',                 redirectTo: '', pathMatch: 'full', loadChildren: './routes/home/home.module#HomeModule'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
