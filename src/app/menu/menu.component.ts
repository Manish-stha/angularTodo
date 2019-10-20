import { Component, OnInit } from '@angular/core';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isLoggedIn:boolean = false
  constructor(private harcodedAuthUser:HardcodeAuthService) { }

  ngOnInit() {
    //console.log('before is'+this.isLoggedIn)
    //this.isLoggedIn = this.harcodedAuthUser.isUserLogedIn()
    //console.log('after is'+this.isLoggedIn)
  }

}
