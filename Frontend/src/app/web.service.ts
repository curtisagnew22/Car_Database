import { HttpClient } from '@angular/common/http' ;
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    private carID: any ; 

    constructor(private http: HttpClient) {
        
    }

    car_list : any ;

    getCars(page: number) {
        return this.http.get('http://127.0.0.1:5000/api/v1.0/cars?pn=' + page);
    }


    getCar(id : any){
        this.carID = id;
        return this.http.get('http://127.0.0.1:5000/api/v1.0/cars/' + id) ;
    }

    getReviews(id : any){

        return this.http.get('http://127.0.0.1:5000/api/v1.0/cars/' + id + '/reviews') ;
    }

    postReview(review: any){

        console.log(review);
        console.log(this.carID);
        let postData = new FormData();
        postData.append("username", review.name);
        postData.append("comment", review.review);
        postData.append("stars", review.stars);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
                        today.getMonth() + "-" +
                        today.getDate();
        postData.append("date", todayDate);

        return this.http.post('http://127.0.0.1:5000/api/v1.0/cars/' + this.carID + '/reviews', postData) ; 
    }

}