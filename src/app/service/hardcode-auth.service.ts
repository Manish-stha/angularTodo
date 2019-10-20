import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthService {

  constructor() { }

  authenticate(username,password){
    //console.log('before'+this.isUserLogedIn())
    if(username==="bhavya" && password==="dummy"){
      sessionStorage.setItem('logedInUser',username)
      //console.log('after'+this.isUserLogedIn())
      return true
    }else
      return false
  }

  isUserLogedIn(){
    let user = sessionStorage.getItem('logedInUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('logedInUser')
  }
}
