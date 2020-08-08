import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';


@NgModule({
  declarations: [UserComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule
  ]
})
export class UserModuleModule { }
