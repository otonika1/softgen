import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(    private http: HttpClient,
    private router: Router,) { }
  getPosts():any{
    return this.http.get(`${environment.BaseUrl}posts`)
  }
  createPosts(obj:any):any{
    return this.http.post(`${environment.BaseUrl}posts`,obj)
  }
}
