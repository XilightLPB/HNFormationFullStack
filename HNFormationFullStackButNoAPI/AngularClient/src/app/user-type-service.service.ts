import { Injectable } from '@angular/core';
import { UserType } from './user-type';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UserTypeServiceService {

  readonly typeUsersUrl = '../assets/data/types';

  constructor(private http: HttpClient) {}

  getAllTypeUser(): Observable<UserType []> {
    console.log("getting all Types");
    return this.http.get<UserType []>(this.typeUsersUrl+"/list.json");
  }

  getTypeUserById(id: number): Observable<UserType > {
    console.log("getting Type ID:" + id)
    return this.http.get<UserType>(this.typeUsersUrl+"/"+id+".json");
  }

  createTypeUser(typeUser: UserType ): Observable<UserType > {
    console.log("creating Type:" + JSON.stringify(typeUser))
    return this.http.post<UserType >(`${this.typeUsersUrl}/create`, typeUser);
  }

  updateTypeUser(typeUser: UserType ): Observable<UserType > {
    console.log("Updating to:" + JSON.stringify(typeUser))
    return this.http.put<UserType >(`${this.typeUsersUrl}/update`, typeUser);
  }

  delete(id: number) {
    console.log("here we would delete Type ID:" + id)
    return this.http.delete(`${this.typeUsersUrl}/${id}`);
  }
}
