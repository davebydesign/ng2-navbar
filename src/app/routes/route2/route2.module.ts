import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './route2.routing';
import { Route2Component } from './route2.component';

@NgModule({
  imports:      [
  	CommonModule,
  	routing
  ],
  providers: [],
  declarations: [
      Route2Component
  ],
  exports: []
})
export class Route2Module {

}
