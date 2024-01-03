import { Component, Type } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserType } from '../../user-type';
import { UserTypeServiceService } from '../../user-type-service.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../../user-service.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit{
  name : FormControl;
  email : FormControl;
  user : User;
  UserTypeList: UserType[];
  type : UserType;
  id : string;
  
  constructor (private userService: UserServiceService,  private route:ActivatedRoute, private userTypeService: UserTypeServiceService){
    const Id = this.route.snapshot.params['id'];
    console.log(`going for Transaction ID:${Id}`);
    this.userTypeService.getAllTypeUser().subscribe(
      data => {
        this.UserTypeList = data as UserType[];
      }
    )
    
    this.userService.getbyID(Id).subscribe(
      (user) => 
      {
        this.user = user as User;
        this.name = new FormControl({value: this.user.name, disabled: false});
        this.email = new FormControl({value: this.user.email, disabled: false});
        this.type = user.type;
        this.user.id = user.id;
        this.id = this.user.id;
      }
      
      
    );
    
  }

  ngOnInit(): void {
    
  }

  SendAnswers() {
    let mail = '';
    let Name ='';
    if (this.email.value == null || this.name.value == null){
      
    }
    else {
      mail = this.email.value;
      Name = this.name.value;
    }
    
    this.user.email = mail;
    this.user.name = Name;
    this.user.type = this.type;
    this.userService.update(this.user);
    console.log("here we would have pushed" + JSON.stringify(this.user));

  }

  SetCurrentTypeOf(type: UserType){
    this.type = type;
  }

  deletethisUser(){
    this.userService.delete(this.user);
  }
}
