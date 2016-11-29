import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Route3Component } from './route3.component';

const routes: Routes = [
    {path: '', component: Route3Component},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
