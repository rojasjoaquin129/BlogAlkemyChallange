import { Component, Input, OnInit } from '@angular/core';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() selecAlbum:any=null;
  listPhotos:any;
  userSelec:any;
  constructor(
    private apiPhotos:ConsumirApiService
  ) {
    this.listPhotos=[];
  }

  ngOnInit(): void {
    if(this.selecAlbum){
      this.apiPhotos.getPhotosAlbum(this.selecAlbum?.id).subscribe((photos:any)=>{
        this.listPhotos=photos;
      })
    }
  }

  view(photo:any){
    Swal.fire({
      imageUrl: photo.url,
      imageHeight: 600,
      imageWidth: 600,
      imageAlt: ''
    })
  }

  delate(index:any){
    this.listPhotos.splice(index,1);
    this.listPhotos.sort((a:any,b:any)=>{return a.id-b.id});
  }
  showUser(id:number){
    this.apiPhotos.getUser(id).subscribe((user)=>{
      this.userSelec=user;
    })
  }
}
