import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Post } from '../models/post';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string = "http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }
  deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(this.apiUrl + '/' + post.id);
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, httpOptions);
  }
  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + '/' + post.id, post);
  }
}
