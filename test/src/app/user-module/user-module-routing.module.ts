import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'userpage', pathMatch: 'full' },
  { path: 'userpage', component:  UserComponent},
  { path: 'createuser', component:  CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
