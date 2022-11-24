import { NgModule } from '@angular/core';
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
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
