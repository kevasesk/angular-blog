import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {PostsComponent} from "./components/posts/posts.component";
import {PagesComponent} from "./components/pages/pages.component";

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/contact-us', component: ContactUsComponent },
  { path: 'admin/posts', component: PostsComponent },
  { path: 'admin/pages', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
