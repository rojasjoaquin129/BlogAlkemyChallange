import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { ImagesComponent } from './images/images.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmptyCardComponent } from './empty-card/empty-card.component';
import { TodosComponent } from './todos/todos.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    UsersComponent,
    AlbumsComponent,
    ImagesComponent,
    PostsComponent,
    EmptyCardComponent,
    TodosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UsersComponent,
    AlbumsComponent,
    ImagesComponent,
    PostsComponent,
    TodosComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
