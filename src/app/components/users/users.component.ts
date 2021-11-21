import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Output() PostsUser :EventEmitter<any>
  @Output() albumsUser :EventEmitter<any>
  @Output() todosUser :EventEmitter<any>
  userSelec:any;
  listUsers:any;
  imgUser:any;
  constructor(
    private apiUsers :ConsumirApiService
  ) {
    this.PostsUser=new EventEmitter<any>();
    this.albumsUser=new EventEmitter<any>();
    this.todosUser=new EventEmitter<any>();
    this.listUsers=[];
    this.userSelec=[];
    this.imgUser='';
   }

  ngOnInit(): void {
    this.listUsers=[];
    this.apiUsers.getUser().subscribe((users)=>{
      this.listUsers=users;
    })
  }

  avatarRandom(variente:any){
    return "https://joeschmoe.io/api/v1/"+variente
  }

  selectUser(user:any ){
    console.log(user);
    this.userSelec=user;
    this.imgUser="https://joeschmoe.io/api/v1/"+user.id;
  }


  /**
   *  funcion que emite un usuario con una foto
   *
   * @param petition string con el objetivo de poder saber donde emitir el usuario
   */
  goUser(petition:string){
    let user:any= {
      img:this.imgUser,
      ...this.userSelec
    }
    switch (petition) {
      case 'todos':
        this.todosUser.emit(user);
        break;
      case 'post':
        this.PostsUser.emit(user);
        break;
      case 'album':
        this.albumsUser.emit(user);
    }
  }
}
