import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TypeUser } from '../../user-type';
import { UserTypeServiceService } from '../../user-type-service.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user-type',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './edit-user-type.component.html',
  styleUrl: './edit-user-type.component.scss'
})
export class EditUserTypeComponent implements OnInit{
  Typename : FormControl;
  userType : TypeUser;
  id :number;

  constructor(private userTypeService : UserTypeServiceService, private route:ActivatedRoute){
    const Id = this.route.snapshot.params['id'];
    this.userTypeService.getTypeUserById(Id).subscribe(
      (user) => 
      {
        this.userType = user as TypeUser;
        this.Typename = new FormControl({value: this.userType.type, disabled: false});
        this.id = user.id;
      }
      
      
    );
  }
  ngOnInit(){{
    
  }}
  SendAnswer(){
    if (this.Typename.value == null){
      this.userType.type = "";
    }
    else {
      this.userType.type = this.Typename.value;
    }

    this.userTypeService.updateTypeUser(this.userType);
  }
}
