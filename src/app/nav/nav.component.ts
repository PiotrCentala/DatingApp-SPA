import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(public authService: AuthService, private alert: AlertifyService) { }

  ngOnInit() {
  }
login() {
  this.authService.login(this.model).subscribe(next => {
    this.alert.success('Loged in succesfully');
  }, error => {
    this.alert.error(error);
  });
}
loggedIn() {
  return this.authService.loggedIn();
}
logout() {
  localStorage.removeItem('token');
  this.alert.message('logut');
}
}
