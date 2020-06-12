import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../shared/service/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials = {
    username: '',
    password: ''
  };

  constructor(private  formBuilder: FormBuilder,
              private appService: AppService,
              private router: Router) {
    // this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]) ]
    });
  }

  login(){
    this.appService.authenticate(this.credentials, () => {
      //this.router.navigateByUrl('/home');
      this.router.navigateByUrl('/home/(homeOutlet:dashboard)');
    });
  }

}
