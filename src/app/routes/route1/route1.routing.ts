import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Route1Component } from './route1.component';

const routes: Routes = [
    {path: '', component: Route1Component},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
