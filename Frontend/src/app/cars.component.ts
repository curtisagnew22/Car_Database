import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {

    constructor(public webService: WebService) {}

    ngOnInit() { 
      if (sessionStorage['page']) {
        this.page = Number(sessionStorage['page']) ; 
      }
      this.car_list = this.webService.getCars(this.page);
       
    }

    previousPage(){
      if (this.page > 1) {
        this.page = this.page - 1;
        sessionStorage['page'] = this.page ;
        this.car_list = this.webService.getCars(this.page) ;
      }

    }

    nextPage(){
      this.page = this.page + 1;
      sessionStorage['page'] = this.page ;

      this.car_list = this.webService.getCars(this.page) ;

    }


    car_list : any = [] ; 
    page: number = 1 ;
    

   }


