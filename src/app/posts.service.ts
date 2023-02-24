import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(    private http: HttpClient,
    private router: Router,) { }
  getPosts(): Observable<any>{
    return this.http.get(`${environment.BaseUrl}posts`)
  }
  createPosts(obj:any): Observable<any>{
    return this.http.post(`${environment.BaseUrl}posts`,obj)
  }
  editPosts(id:number,obj:any): Observable<any>{
    return this.http.put(`${environment.BaseUrl}posts/${id}`,obj)
  }
  getPostsById(id:number): Observable<any>{
    return this.http.get(`${environment.BaseUrl}posts/${id}`)
  }
  deleteAttraction(id:number): Observable<any>{
    return this.http.delete(`${environment.BaseUrl}posts/${id}`)
  }
}
