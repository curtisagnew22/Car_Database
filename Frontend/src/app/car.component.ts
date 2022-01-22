import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent {

    reviewForm: any ;

    constructor(private webService: WebService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                public authService: AuthService) {}

    ngOnInit() { 

      this.reviewForm = this.formBuilder.group({
        name: ['', Validators.required],
        review: ['', Validators.required],
        stars: 5
      });

      this.car_list =  this.webService.getCar(this.route.snapshot.params['id']);
      this.reviews =  this.webService.getReviews(this.route.snapshot.params['id']);


    }

    onSubmit() {
      this.webService.postReview(this.reviewForm.value)
        .subscribe((response: any) => {
          this.reviewForm.reset();
          this.reviews = this.webService.getReviews(
            this.route.snapshot.params['id']);
          }); 

    }

    isInvalid(control: any){
      return this.reviewForm.controls[control].invalid &&
             this.reviewForm.controls[control].touched;
    }

    isUnTouched(){
      return this.reviewForm.controls.name.pristine ||
             this.reviewForm.controls.review.pristine;
    }

    isIncomplete(){
      return this.isInvalid('name') ||
             this.isInvalid('review') ||
             this.isUnTouched() ;

    }


    car_list : any = [] ;
    reviews: any = [] ;

   }


