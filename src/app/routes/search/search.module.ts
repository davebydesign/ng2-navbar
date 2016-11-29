import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './search.routing';
import { SearchComponent } from './search.component';

@NgModule({
  imports:      [
  	CommonModule,
  	routing
  ],
  providers: [],
  declarations: [
      SearchComponent
  ],
  exports: []
})
export class SearchModule {

}
