import { Injectable } from '@angular/core';
import { UserType } from './user-type';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UserTypeServiceService {

  readonly typeUsersUrl = 'http://localhost:8080/type-users';

  constructor(private http: HttpClient) {}

  getAllTypeUser(): Observable<UserType []> {
    return this.http.get<UserType []>(this.typeUsersUrl);
  }

  getTypeUserById(id: number): Observable<UserType > {
    return this.http.get<UserType>(this.typeUsersUrl+"/"+id);
  }

  createTypeUser(typeUser: UserType ): Observable<UserType > {
    return this.http.post<UserType >(`${this.typeUsersUrl}/create`, typeUser);
  }

  updateTypeUser(typeUser: UserType ): Observable<UserType > {
    return this.http.put<UserType >(`${this.typeUsersUrl}/update`, typeUser);
  }

  delete(id: number) {
    return this.http.delete(`${this.typeUsersUrl}/${id}`);
  }
}
