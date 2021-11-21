import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { ListTodosComponent } from './list-todos/list-todos.component';



@NgModule({
  declarations: [
    BienvenidoComponent,
    ListUsersComponent,
    ListAlbumsComponent,
    ListPostsComponent,
    ListTodosComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PageModule { }
