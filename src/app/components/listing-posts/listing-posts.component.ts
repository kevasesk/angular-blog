import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/post";
import { PostsService } from "../../services/posts.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-listing-posts',
  templateUrl: './listing-posts.component.html',
  styleUrls: ['./listing-posts.component.css']
})
export class ListingPostsComponent implements OnInit {
  posts : Post[] = [];

  constructor(private taskService : PostsService) {

  }

  ngOnInit(): void {
    this.taskService.getPosts().subscribe(
      (posts) => this.posts = posts
    );
  }

}
