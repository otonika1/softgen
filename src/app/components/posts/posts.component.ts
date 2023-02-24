import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private service:PostsService) { }
  posts: Posts[] = [];
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getPosts().subscribe((res:Posts[]) => {
      console.log(res)
      this.posts = res
    }
    );
  }
}
