import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TypeUser } from '../../user-type';
import { UserTypeServiceService } from '../../user-type-service.service';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-type-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-type-form-control.component.html',
  styleUrl: './user-type-form-control.component.scss'
})
export class TypeUserFormControlComponent implements OnInit{
  Typename = new FormControl('');
  TypeUser : TypeUser;

  constructor(private TypeUserService : UserTypeServiceService){
    this.TypeUser = new TypeUser();
  }

  ngOnInit(): void {
    this.TypeUser.type = "NoTypeName";
  }
  
  SendAnswer(){

    if (this.Typename.value == null){
      this.TypeUser.type = "";
    }
    else {
      this.TypeUser.type = this.Typename.value;
    }

    this.TypeUserService.createTypeUser(this.TypeUser);
    console.log("new type incoming");
    

  }

}
