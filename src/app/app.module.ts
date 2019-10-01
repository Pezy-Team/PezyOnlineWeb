import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { CatagoryListComponent } from './catagory-list/catagory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatagoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,CatagoryListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
