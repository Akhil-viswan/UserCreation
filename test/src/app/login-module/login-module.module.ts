import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    FormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModuleModule { }
