import { Component, OnInit } from '@angular/core';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authCheck:HardcodeAuthService) { }

  ngOnInit() {
    this.authCheck.logout();
  }


}
