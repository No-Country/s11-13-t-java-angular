import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';

import { HomeAdminComponent } from './main-admin/home-admin/home-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';


const routes: Routes = [
  {
    path:'',component:MainComponent,
    children:[
      {path:'',component:HomeComponent},
    ]
  },
  {
    path:'admin',component:MainAdminComponent
  ,
    children:[
      {path:'',component:HomeAdminComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
