import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
import { Observable, pipe } from 'rxjs';
import { Posts } from '../posts';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  success: boolean = false;
  constructor(private service:PostsService,private route:ActivatedRoute,private router:Router) { }
  Observable = new Observable((observer) => {
    observer.next(this.success = true);
    setTimeout(() => {observer.next(this.success = false)},800);
    setTimeout(() => {observer.next(this.router.navigate(['posts']));},800);
    observer.complete();
  })
  form = new FormGroup(
    { 
      name:new FormControl(''),
      description:new FormControl(''),
      priority:new FormControl(),
      date:new FormControl(new Date()),
    }
  )
  id!:number;
  ngOnInit(): void {
    this.route.paramMap.subscribe((c:any) => {
      this.id = +c.get('id')!;   
    })
    this.getN();
    

  }
  getN(){
    
    this.service.getPostsById(this.id).subscribe((res:Posts)=>{
      this.form = new FormGroup(
        { 
          name:new FormControl(res.name),
          description:new FormControl(res.description),
          priority:new FormControl(res.priority),
          date:new FormControl(new Date()),
        }
      )
      
    });
  }
  edit(){
    console.log(this.form.value);
    this.service.editPosts(this.id, this.form.value).subscribe((res:Posts)=>{
      console.log(res);
      this.Observable.subscribe();
    })
  }
  
}
