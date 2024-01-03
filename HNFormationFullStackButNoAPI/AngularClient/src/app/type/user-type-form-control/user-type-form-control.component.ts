import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserType } from '../../user-type';
import { UserTypeServiceService } from '../../user-type-service.service';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-type-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-type-form-control.component.html',
  styleUrl: './user-type-form-control.component.scss'
})
export class UserTypeFormControlComponent implements OnInit{
  Typename = new FormControl('');
  userType : UserType;

  constructor(private userTypeService : UserTypeServiceService){
    this.userType = new UserType();
  }

  ngOnInit(): void {
    this.userType.type = "NoTypeName";
  }
  
  SendAnswer(){

    if (this.Typename.value == null){
      this.userType.type = "";
    }
    else {
      this.userType.type = this.Typename.value;
    }

    this.userTypeService.createTypeUser(this.userType);
    console.log("new type incoming");
    

  }

}
