import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  @Input() idUser:any=null;
  @Input() userName:any=null;
  @Output() album:EventEmitter<any>;
  tittle:string='Bienvenido a Todos Los Albumes';
  listAlbums:any=[];
  constructor(
    private apiAlbum:ConsumirApiService
  ) {
    this.album=new EventEmitter<any>();
   }


  ngOnInit(): void {
    if(this.idUser){
      this.tittle='Bienvenido a Los Álbumes de '+ this.userName;
      this.apiAlbum.getAlbumsUser(this.idUser).subscribe((albumes)=>{
        this.listAlbums=albumes;
      })
    }else{
      this.apiAlbum.getAlbumsUser().subscribe((albumes)=>{
        this.listAlbums=albumes;
      });
    }

  }

  /**
   *   generar una imagen random con un numero el cual es el id del album
   * lo bueno es q al ser el id unico nunca se va a repetir la imagen
   * @param variante id del album
   * @returns retorna la imagen
   */
  imgRandom(variante:number){
    return "https://source.unsplash.com/random/"+variante;
  }


  selecAlbum(album:any){
    this.album.emit(album);
    console.log(album);
  }
}
