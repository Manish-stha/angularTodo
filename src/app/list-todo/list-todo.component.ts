import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

export class Todo {
  constructor(
    public id:number,
    public username:string,
    public desc:string,
    public targetDate:Date,
    public status:boolean
  ){

  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todos:Todo[]
  constructor(private getListdata:WelcomeDataService) { }

  ngOnInit() {
    let user = sessionStorage.getItem('logedInUser');
    console.log(user)
    this.getListdata.getUserTodoList(user).subscribe(
      res=>{
       this.todos = res
      }
    )
  }


}
