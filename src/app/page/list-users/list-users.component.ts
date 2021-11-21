import { Component, OnInit } from '@angular/core';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  userSelec:any;
  albumSelec:any;
  listUsers:any;
  showList:boolean=true;
  showListAlbum:boolean=false;
  showListImages:boolean=false;
  showListPost:boolean=false;
  showListTodos:boolean=false;
  constructor(
    private apiUsers: ConsumirApiService
  ) {

  }

  ngOnInit(): void {

  }
  show(algo:string){
    switch (algo) {
      case 'album':
        this.showListAlbum=true;
        this.showListPost=false;
        this.showListImages=false;
        this.showListTodos=false;
        break;
      case 'post':
        this.showListPost=true;
        this.showListAlbum=false;
        this.showListImages=false;
        this.showListTodos=false;
        break;
      case 'todos':
        this.showListTodos=true;
        this.showListPost=false;
        this.showListAlbum=false;
        this.showListImages=false;
      break;
      case 'cambiar':
        this.showList=true;
        this.showListTodos=false;
        this.showListPost=false;
        this.showListAlbum=false;
        this.showListImages=false;
        break;
    }

  }
  allSelected(user:any){
    console.log("selecciono todo el tipo" );
    this.userSelec=user;
    this.showListTodos=true;
    this.showList=false;
  }

  postSelected(user:any){
    console.log("selecciono los posteos el tipo" );
    this.userSelec=user;
    this.showList=false;
    this.showListPost=true;

  }
  albumsSelected(user:any){
    console.log("selecciono los albumes el tipo" );
    this.userSelec=user;
    this.showList=false;
    this.showListAlbum=true;
  }
  albumToShow(album:any){
    console.log(album);
    this.albumSelec=album;
    this.showListAlbum=false;
    this.showListImages=true;
  }
}
