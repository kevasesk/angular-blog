import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from "../../../models/post";
import { PostsService } from "../../../services/posts.service";

@Component({
  selector: 'post-tr',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter<Post>();

  title: string = '';
  desc: string = '';
  author: string = '';

  editState: boolean = false;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
  }

  onDelete(post: Post): void {
    this.onDeletePost.emit(post);
  }

  onEdit(post:Post): void {
    this.editState = !this.editState;
    this.title = post.title;
    this.desc = post.desc;
    this.author = post.author;
  }

  onSaveEdit(post:Post): void {
    this.editState = !this.editState;
    let updatedPost: Post = {
      id: post.id,
      title: this.title,
      desc: this.desc,
      author: this.author
    };
    this.post = updatedPost;
    this.postsService.editPost(updatedPost).subscribe();
  }

}
