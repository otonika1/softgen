import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    EditComponent,

  ],
  exports:[PostsComponent,CreateComponent,EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
