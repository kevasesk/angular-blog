import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from "../../../models/post";
import { PostsService } from "../../../services/posts.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  newPost: Post;

  title : string;
  desc : string;
  author : string;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['./admin/posts']);
  }
  onSubmit(): void {
    this.newPost = {
      id: new Date().valueOf(),
      title: this.title,
      desc: this.desc,
      author: this.author
    }
    this.postsService.addPost(this.newPost).subscribe();
    this.router.navigate(['./admin/posts']);
  }

}
