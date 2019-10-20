import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';

export class HelloWorldBean{
  constructor(public data:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  pathIp = 'http://192.168.1.13:8080/'

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldMsg(){
    return this.http.get<HelloWorldBean>(this.pathIp+'hello-world-bean'); 
    //console.log("welcome to hello world")
  }

  executeMsgPathVar(name){
    return this.http.get<HelloWorldBean>(`${this.pathIp}hello/path-variable/${name}`); 
    //console.log("welcome to hello world")
  }

  getUserTodoList(name){
    return this.http.get<Todo[]>(`${this.pathIp}/todo/getList/${name}`);
  }
}
