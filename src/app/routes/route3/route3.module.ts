import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './route3.routing';
import { Route3Component } from './route3.component';

@NgModule({
  imports:      [
  	CommonModule,
  	routing
  ],
  providers: [],
  declarations: [
      Route3Component
  ],
  exports: []
})
export class Route3Module {

}
