import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Route2Component } from './route2.component';

const routes: Routes = [
    {path: '', component: Route2Component},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
