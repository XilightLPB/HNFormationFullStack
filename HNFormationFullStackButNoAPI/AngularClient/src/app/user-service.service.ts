import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users/user';
import { Observable } from 'rxjs';
import { UserType } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;
  constructor(private http: HttpClient) 
  { 
    this.usersUrl = '../assets/data/users';
  }

  public getAll(): Observable<User[]>{
    console.log("getting all the users");
    return this.http.get<User[]>(this.usersUrl+"/list.json");
  }

  public save(user: User){
    console.log("posting the User" + JSON.stringify(user));
    return this.http.post<User>(this.usersUrl+'/create', user, {responseType: 'text' as 'json'});

  }

  public update(user: User){
    console.log("psuhing the 'new' User" + JSON.stringify(user));
    return this.http.post<User>(this.usersUrl+'/update', user, {responseType: 'text' as 'json'});
  }

  public getbyID(id: number){
    console.log("getting User with ID:" + id);
    return this.http.get<User>(this.usersUrl+'/'+id+".json");
    
    


  }

  public delete(user: User){
    console.log("deleting this User");
    let id = user.id;
    return this.http.delete<User>(this.usersUrl+'/'+id+"*.json");
    /*console.log("trying to delete the User")
    let id = user.id;
    let previous = this.getAll();
    let workset = previous as unknown as User[];
    let i = 0;
    while (i<workset.length){
      if (workset[i].id == id){
        workset.splice(i,i);
      }
    }
    const fs = require("fs");
    try {
      fs.unlink(this.usersUrl+"/"+id+".json");
    }
    catch(err){
      
    }
    try {
      fs.unlink(this.usersUrl+"/"+"list"+".json");
    }
    catch(err){
      
    }
    let data = JSON.stringify(workset);
    fs.writeFile(this.usersUrl+"/"+"list"+".json", data, );
  }*/
  }
}
