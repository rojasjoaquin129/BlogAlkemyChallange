import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit {
  showListAlbum:boolean=true;
  showListImages:boolean=false;
  albumSelec:any;
  constructor() { }


  ngOnInit(): void {
  }
  albumToShow(album:any){
    this.albumSelec=album
    this.showListImages=true;
    this.showListAlbum=false;
  }
}
