import { Component } from '@angular/core';
import { TypeUser } from '../../user-type';
import { UserTypeServiceService } from '../../user-type-service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrl: './user-type-list.component.scss'
})
export class UserTypeListComponent implements OnInit {

  UsersTypes : TypeUser []

  constructor(private userService: UserTypeServiceService){}

  ngOnInit(){
    this.userService.getAllTypeUser().subscribe(data => {this.UsersTypes = data;});

    
  }

  deletethisType(id : number){
    this.userService.delete(id);
  }
}
