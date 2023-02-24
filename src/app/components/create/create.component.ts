import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
import { Observable, pipe } from 'rxjs';
import { Posts } from '../posts';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  success: boolean = false;
  Observable = new Observable((observer) => {
    observer.next(this.success = true);
    setTimeout(() => {observer.next(this.success = false)},800);
    setTimeout(() => {observer.next(this.router.navigate(['posts']));},800);
    observer.complete();
  })
  constructor(private service:PostsService,private router:Router) { }
  form = new  FormGroup (
    { 
      name:new FormControl(''),
      description:new FormControl(''),
      priority:new FormControl(),
      date:new FormControl(new Date()),
    }
  )
    create(){
      console.log(this.form.value);
      this.service.createPosts(this.form.value).subscribe((res:Posts) => {
        console.log(res);
        this.Observable.subscribe();
      })
    }
  ngOnInit(): void {
  }
}
