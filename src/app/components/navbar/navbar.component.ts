import { Component, Input, OnChanges, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit ,OnChanges {
  @Input() user:any=null;

  @Output() mostrar:EventEmitter<any>
  setUser=false;
  constructor(
    private router:Router
  ) {
    this.mostrar=new EventEmitter<any>();
   }

  ngOnInit(): void {
   this.preguntar()
  }
  ngOnChanges(change:SimpleChanges){
    if(change['user'].currentValue){
      this.preguntar();
    }
  }

  preguntar(){
    if(this.user){
      this.setUser=true;
    }else{
      this.setUser=false;
    }
  }

  goUser(show:string){
    this.mostrar.emit(show);
  }
  /**
   *  ni idea porq no me salio el routerlink :(
   * @param auto
   */
  go(auto:string){
    let ruta='';
    switch (auto) {
      case 'user':
        ruta='list-users';
        break;
      case 'album':
        ruta='list-albums';
        break;
      case 'post':
        ruta='list-posts'
        break;
      case 'todos':
        ruta='list-todos'
        break;
    }
    this.router.navigate([ruta]);
  }
}
