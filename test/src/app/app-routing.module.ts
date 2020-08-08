import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('src/app/login-module/login-module.module').then(m => m.LoginModuleModule)},

  { path: 'userlist', loadChildren: () => import('src/app/user-module/user-module.module').then(m => m.UserModuleModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
