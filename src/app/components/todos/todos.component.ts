import { Component, Input, OnInit } from '@angular/core';
import { ConsumirApiService } from 'src/app/services/consumir-api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() idUser:any=null;
  showData:boolean=false;
  listTodos:any=[];
  ListFilter:any=[];
  todoSelec:any;
  busqueda:any;
  tittle="Bienvenido a Todos los Todos";
  constructor(
    private apiTodos:ConsumirApiService
  ) { }

  ngOnInit(): void {
    if(this.idUser){
      this.apiTodos.getTodosUser(this.idUser).subscribe((todos)=>{
        this.tittle="Bienvenido a Mis Todos"
        this.listTodos=todos;
        this.ListFilter=todos;
      })
    }else{
      this.apiTodos.getTodosUser().subscribe((todos)=>{
        this.listTodos=todos;
        this.ListFilter=todos;
      });
    }
  }
  filtrarLista(){
    this.listTodos=this.ListFilter;
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
     this.listTodos=filterList;
   }
  verificacion(post:any){
    let flag=false;
    if(this.todoSelec.id===post.id){
      flag=true;
    }
    return flag;
  }
  open(todo:any){
    this.todoSelec=todo;

    this.showData=true;
  }
  setState(index:any){
    let comentario='';
    if(this.listTodos[index].completed){
      comentario="Usted Desactivo con exito"
      this.listTodos[index].completed=false;
    }else{
      comentario="Usted Activo con exito"
      this.listTodos[index].completed=true;
    }
    this.showData=false;
    this.message(comentario);
  }
  message(comentario:string){
    Swal.fire(comentario, '', 'success')
  }

}
