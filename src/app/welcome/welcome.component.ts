import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
 
export class WelcomeComponent implements OnInit {

    name = ''
    resMessage;
  constructor(private route:ActivatedRoute,private getHelloMessage:WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['name'])
    this.name = sessionStorage.getItem('logedInUser');
  }
//---------------------------------------------------------------------
  getMsg(){
   // console.log(this.getHelloMessage.executeHelloWorldMsg())
    this.getHelloMessage.executeHelloWorldMsg().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrResponse(error)
    );
  }

  handleSuccessfulResponse(response){
      this.resMessage = response.data
  }

  handleErrResponse(error){
    this.resMessage = error.error.message;
  }
  //---------------------------------------------------------------------
  getPathVariableData(){
    let user = sessionStorage.getItem('logedInUser')
    this.name = user;
    this.getHelloMessage.executeMsgPathVar(user).subscribe(
      response=>this.handleSuccessfulResponse(response)
    )
  }

}
