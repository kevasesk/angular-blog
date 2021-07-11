import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PostsComponent} from "./components/posts/posts.component";
import {AddPostComponent} from "./components/add-post/add-post.component";

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/posts', component: PostsComponent },
  { path: 'admin/add-post', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
