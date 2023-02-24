import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Posts } from '../posts';
import { Observable, pipe } from 'rxjs';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  success:boolean = false;
  successfullyCreated:boolean = false;
  constructor(private service:PostsService) { }
  posts: Posts[] = [];
  Observable = new Observable((observer) => {
    observer.next(this.getAll())
    observer.complete();
    
  })
  ngOnInit(): void {
    this.Observable.subscribe();
  }
  getAll(){
    this.service.getPosts().subscribe((res:Posts[]) => {
      console.log(res)
      this.posts = res
    }
    );
  }
  delete(id:number){
    this.service.deleteAttraction(id).subscribe((res:Posts) => {
      this.Observable.subscribe();
      this.success = true;
      setTimeout(() => {this.success = false;},1000)
    })
  }
}
