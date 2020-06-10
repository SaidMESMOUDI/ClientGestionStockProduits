import {Component, OnInit} from '@angular/core';
import {User} from './model/user.model';
import {UserService} from './service/user.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataModel} from '../crud/model/data.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  user: User = new User();

  usersModel: DataModel[];

  userForm: FormGroup;

  constructor(public userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users;

    this.createUserForm();

    this.usersModel = [
      new DataModel('id','ID','number',true,[]),
      new DataModel('username','Nom d\'utilisateur','string',false,[]),
      new DataModel('enable','Actif','number',true,[])
    ]
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
  }

}
