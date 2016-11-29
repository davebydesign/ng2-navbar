import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {

   public NavbarBrand : string = 'DaveByDesign';
   public NavbarItems : Array<any> = [
      {label : 'Home',    href : ''       },
      {label : 'Route 1',  href : 'route1' },
      {label : 'Route 2',  href : 'route2' },
      {label : 'Route 3',  href : 'route3' }
   ];

   constructor(public router: Router, public route: ActivatedRoute) {

   }

   OnNavbarSearchSubmit(passedSearchText:string) {
      this.router.navigate(['/search/'+passedSearchText]);
   }
}
