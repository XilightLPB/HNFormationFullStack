import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserEditComponent } from './users/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { UserTypeListComponent } from './type/user-type-list/user-type-list.component';
import { FormControlComponent } from './users/form-control/form-control.component';
import { UserTypeFormControlComponent } from './type/user-type-form-control/user-type-form-control.component';
import { EditUserTypeComponent } from './type/edit-user-type/edit-user-type.component';

const routes: Routes = [
  {path:'addUser', component:FormControlComponent},
  {path:'UserEdit/:id', component:UserEditComponent},
  {path:'TypeEdit/:id', component:EditUserTypeComponent},
  {path:'Users', component:UserListComponent},
  {path:'TypeEdit', component:EditUserTypeComponent},
  {path:'TypeForm', component:UserTypeFormControlComponent},
  {path:'TypeList', component:UserTypeListComponent},
  {path: 'AddUser', component:FormControlComponent},
  



  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
