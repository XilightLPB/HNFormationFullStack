import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../../user-service.service';
import { TypeUser } from '../../user-type';
import { UserTypeServiceService } from '../../user-type-service.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  name = new FormControl('');
  email = new FormControl('');
  user : User;
  UserTypeList : TypeUser [];
  type : TypeUser;
  
  constructor (private userService: UserServiceService, private userTypeService: UserTypeServiceService){
    this.user = new User();
    this.userTypeService.getAllTypeUser().subscribe(
      data => {
        this.UserTypeList = data as TypeUser[];
      }
      
    )
    let Random = new TypeUser();
    Random.id = 666;
    Random.type = "No type for the moment";
    this.type = Random;
  }

  SendAnswers() {
    console.log("let's try to send answers")
    let mail = '';
    let Name ='';
    if (this.email.value == null || this.name.value == null){
      
    }
    else {
      mail = this.email.value;
      Name = this.name.value;
      this.email.reset();
      this.name.reset();
    }
    
    this.user.email = mail;
    this.user.name = Name;
    this.user.type = this.type;
    this.userService.save(this.user);

  }

  SetCurrentTypeOf(type: TypeUser){
    this.type = type;
  }
  
  
}
