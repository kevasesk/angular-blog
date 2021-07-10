import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PagesComponent } from './components/pages/pages.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    ContactUsComponent,
    PagesComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class AdminModule { }
