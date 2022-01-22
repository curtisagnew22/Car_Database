import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { HomeComponent } from './home.component';
import { CarComponent } from './car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav.components';
import { AuthModule} from '@auth0/auth0-angular';
import { NgxPaginationModule } from 'ngx-pagination';



var routes: any = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'cars/:id',
    component: CarComponent
  }
] ; 

@NgModule({
  declarations: [
    AppComponent, CarsComponent, HomeComponent, CarComponent, NavComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    RouterModule.forRoot(routes), ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-6ku9ajyo.us.auth0.com',
      clientId: 'i7OX2M0AkSF8sf3LE4CgzpATCPD59ln2'
    })

  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
