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
    this.usersUrl = 'http://localhost:8080/users';
  }

  public getAll(): Observable<User[]>{

    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User){
    return this.http.post<User>(this.usersUrl+'/create', user, {responseType: 'text' as 'json'});

  }

  public update(user: User){
    return this.http.post<User>(this.usersUrl+'/update', user, {responseType: 'text' as 'json'});
  }

  public getbyID(id: number){

    return this.http.get<User>(this.usersUrl+'/'+id,{responseType: 'text' as 'json'});
    
    


  }

  public delete(user: User){
    let id = user.id;
    return this.http.post<User>(this.usersUrl+'/'+id,{responseType: 'text' as 'json'});
  }
}
