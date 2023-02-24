import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path:'create', component:CreateComponent},
  { path:'edit', component:EditComponent},
  {path:'edit/:id',component:EditComponent},
  { path:'posts', component:PostsComponent},
  { path: '',redirectTo:'posts',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
