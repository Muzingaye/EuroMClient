import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servives/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private  basicAuthService: AuthenticationService) { }

  ngOnInit(): void {
      this.basicAuthService.logout();
  }

}
