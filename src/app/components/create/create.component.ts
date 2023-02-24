import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
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
      this.service.createPosts(this.form.value).subscribe((res:any) => {
        console.log(res);
        this.router.navigate(['posts'])
      })
    }
  ngOnInit(): void {
  }
}
