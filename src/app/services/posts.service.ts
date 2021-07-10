import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Post } from '../models/post';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'posts')
  }
}
