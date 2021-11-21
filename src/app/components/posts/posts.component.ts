import { Component, Input, OnInit } from '@angular/core';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() idUser:any=null;
  showComments=false;
  listPosts:any=[];
  postSelec:any;
  listComments:any=[];
  ListFilter:any=[];
  busqueda:any;
  userSelec:any;
  tittle="Bienvenido al Blog Post!";
  constructor(
    private apiPost:ConsumirApiService
  ) {
    this.listPosts=[];
    this.listComments=[];
  }

  ngOnInit(): void {
    if(this.idUser){
      this.apiPost.getPostUser(this.idUser).subscribe((posts)=>{
        this.tittle="Bienvenido a ver Mis Post";
        this.listPosts=posts;
        this.ListFilter=posts;
      })
    }else{
      this.apiPost.getPostUser().subscribe((posts)=>{
        this.listPosts=posts;
        this.ListFilter=posts;
      });
    }
  }
  verificacion(post:any){
    let flag=false;
    if(this.postSelec.id===post.id){
      flag=true;
    }
    return flag;
  }
  viewComment(post:any){
    this.getCommentId(post.id);
    this.postSelec=post
    this.showComments=true;
  }

  getCommentId(id:any){
    this.listComments=[];
    this.apiPost.getCommentPost(id).subscribe((comment)=>{
      this.listComments=comment;
    })
  }

  generateImage(id:any){
    if(this.showComments){

      let index=id+10;
      console.log("https://joeschmoe.io/api/v1/"+index);
      return "https://joeschmoe.io/api/v1/"+index;
    }else
    return
  }

  filtrarLista(){
   this.listPosts=this.ListFilter;
    const filterList=this.ListFilter?.filter(
      (post:any)=>{
        return (
          post.title?.toLowerCase()
          .includes(this.busqueda?.toLowerCase()) ||
          post.userId?.toString().toLowerCase()
          .includes(this.busqueda?.toLowerCase())
        );
      }
    );
    this.listPosts=filterList;
  }


  getUser(id:any){
    this.apiPost.getUser(id).subscribe((user)=>{
      this.userSelec=user;
    })
  }
  viewUser(id:any){
    this.userSelec=[];
    this.getUser(id);
  }

}
