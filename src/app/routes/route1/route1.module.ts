import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './route1.routing';
import { Route1Component } from './route1.component';

@NgModule({
  imports:      [
  	CommonModule,
  	routing
  ],
  providers: [],
  declarations: [
      Route1Component
  ],
  exports: []
})
export class Route1Module {

}
