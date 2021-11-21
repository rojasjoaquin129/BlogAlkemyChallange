import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ListAlbumsComponent } from './page/list-albums/list-albums.component';
import { ListPostsComponent } from './page/list-posts/list-posts.component';
import { ListTodosComponent } from './page/list-todos/list-todos.component';
import { ListUsersComponent } from './page/list-users/list-users.component';

const routes: Routes = [
  {path:'' ,component:BienvenidoComponent},
  {path:'list-users' ,component:ListUsersComponent},
  {path:'list-albums',component:ListAlbumsComponent},
  {path:'list-posts',component:ListPostsComponent},
  {path:'list-todos',component:ListTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
