import { Injectable } from '@angular/core';
import { TypeUser} from './user-type';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UserTypeServiceService {

  readonly typeUsersUrl = 'http://localhost:8080/type-users';

  constructor(private http: HttpClient) {}

  getAllTypeUser(): Observable<TypeUser[]> {
    return this.http.get<TypeUser []>(this.typeUsersUrl);
  }

  getTypeUserById(id: number): Observable<TypeUser > {
    return this.http.get<TypeUser>(`${this.typeUsersUrl}/${id}`);
  }

  createTypeUser(typeUser: TypeUser ): Observable<TypeUser > {
    return this.http.post<TypeUser >(`${this.typeUsersUrl}/create`, typeUser);
  }

  updateTypeUser(typeUser: TypeUser ): Observable<TypeUser > {
    return this.http.put<TypeUser >(`${this.typeUsersUrl}/update`, typeUser);
  }

  delete(id: number) {
    return this.http.delete(`${this.typeUsersUrl}/${id}`);
  }
}
