
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    template: `
        You Searched for "{{SearchText}}".
    `
})

export class SearchComponent {

    private SearchText : string;

    constructor(
      public route: ActivatedRoute,
      public router: Router) {}

    ngOnInit() {
        this.route.params
          .map(params => params['SearchText'])
          .subscribe((SearchText) => {
              this.SearchText = SearchText;
          });
    }
}
