import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Manish"
  password = ""
  invalidMsg = "Invalid creds"
  flag = false

  constructor(private route:Router, private hardcodedAuthService:HardcodeAuthService) {

   }

  ngOnInit() {
  }
 
  handleLogin(){
     console.log(this.username," W ",this.password)
   if(this.hardcodedAuthService.authenticate(this.username,this.password)){
        this.flag  = false
    this.route.navigate(['welcome',this.username])
    }
    else
        this.flag = true
}
}
