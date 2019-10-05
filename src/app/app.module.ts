import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { CatagoryListComponent } from './catagory-list/catagory-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CatagoryListComponent,
    UserProfileComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent,CatagoryListComponent,UserProfileComponent,RegisterModalComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
