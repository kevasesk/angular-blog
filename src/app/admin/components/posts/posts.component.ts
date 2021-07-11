import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from "../../../models/post";
import { PostsService } from "../../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Post[] = [];

  constructor(private postService : PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (posts) => this.posts = posts
    );
  }
  addNew(): void {
    this.router.navigate(['./admin/add-post']);
  }
  deletePost(post:Post): void {
    this.postService.deletePost(post).subscribe(
      () => (this.posts = this.posts.filter(p => p.id !== post.id))
    );
  }


}
