import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewnavbarComponent } from './newnavbar/newnavbar.component';

const myRoute : Routes = [

  {
    path:"",
    component:AdministratorLoginComponent
  },
  {
    path:"login",
    component:UserloginComponent
  },
  
  {
    path:"entry",
    component: BookEntryComponent
  },
  {
    path:"search",
    component: BookSearchComponent

  },
  {
    path:"edit",
    component: BookEditComponent
  },
  {
    path:"delete",
    component:BookdeleteComponent
  },
  {
    path:"viewall",
    component:ViewAllBooksComponent
  },
  {
    path:"navbar",
    component:NavBarComponent

  },
  {
    path:"newnavbar",
    component:NewnavbarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdministratorLoginComponent,
    UserRegistrationComponent,
    UserloginComponent,
    BookEntryComponent,
    ViewAllBooksComponent,
    BookSearchComponent,
    BookEditComponent,
    BookdeleteComponent,
    NavBarComponent,
    NewnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
