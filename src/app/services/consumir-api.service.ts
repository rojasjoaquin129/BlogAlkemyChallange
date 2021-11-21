import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumirApiService {

  constructor(
    private http:HttpClient
  ) { }

  /**
   * devuelve la lista de TODOS los/el usuario pedido
   *
   * @param id si no existe el parametro devuelve todo los usuarios y si existe devuelve ese usuario
   * @returns devuelve un obserbable para poder subcribirnos y devolver el o los usuarios de la BD
   */

  getUser(id?:number){
    let url:string='';
    if(id){
      url="https://jsonplaceholder.typicode.com/users/"+id;
    }else{
      url="https://jsonplaceholder.typicode.com/users/";
    }
    return this.http.get(url);
  }

  /**
   * devuelve lista de albumes por usuario o todos
   * @param id si no existe el parametro devuelve todo los albums de la BD
   * @returns devuelve un obserbable para poder subcribirnos y devolver la lista de albumes que queremos
   */
  getAlbumsUser(id?:string ){
    let url:string='';
    if(id){
      url="https://jsonplaceholder.typicode.com/users/"+id+"/albums";
    }else{
      url="https://jsonplaceholder.typicode.com/albums/";
    }
    return this.http.get(url);
  }

  getPhotosAlbum(id:string){
    const url="https://jsonplaceholder.typicode.com/album/"+id+"/photos";
    return this.http.get(url);
  }

  getPostUser(id?:string){
    let url:string='';
    if(id){
      url="https://jsonplaceholder.typicode.com/user/"+id+"/posts";
    }else{
      url="https://jsonplaceholder.typicode.com/posts/";
    }
    return this.http.get(url);
  }
  getCommentPost(id:string){
    const url="https://jsonplaceholder.typicode.com/posts/"+id+"/comments";
    return this.http.get(url);
  }
  getTodosUser(id?:string){
    let url:string='';
    if(id){
      url="https://jsonplaceholder.typicode.com/user/"+id+"/posts";
    }else{
      url="https://jsonplaceholder.typicode.com/todos/";
    }
    return this.http.get(url);
  }
}
