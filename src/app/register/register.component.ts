import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
@Output() CancelRegistration = new EventEmitter();

  constructor(private authservice: AuthService, private alert: AlertifyService) { }

  ngOnInit() {
  }

register() {
  this.authservice.register(this.model).subscribe(() => {
    this.alert.success('Register succesful');

  },
  error => {
    this.alert.error(error);
  });
}
cancel() {
  this.CancelRegistration.emit(false);
  
}
}
