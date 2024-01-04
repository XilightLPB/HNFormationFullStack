import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users/user';
import { Observable } from 'rxjs';
import { TypeUser } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string = 'http://localhost:8080/users';
  constructor(private http: HttpClient) 
  { 
  }

  public getAll(): Observable<User[]>{

    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User){
    return this.http.post<User>(`${this.usersUrl}/create`, user);

  }

  public update(user: User){
    return this.http.put<User>(`${this.usersUrl}/update`, user);
  }

  public getbyID(id: number){

    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  public delete(user: User){
    let id = user.id;
    return this.http.delete(`${this.usersUrl}/${id}`);
  }
}
