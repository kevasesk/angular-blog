import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageComponent } from './components/page/page.component';
import { ListingPagesComponent } from './components/listing-pages/listing-pages.component';
import { ListingPostsComponent } from './components/listing-posts/listing-posts.component';
import { LoginComponent } from './components/backend/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PostComponent,
    ContactUsComponent,
    PageComponent,
    ListingPagesComponent,
    ListingPostsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
