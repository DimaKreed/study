import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {BarCodesListComponent} from "./components/bar-codes-list/bar-codes-list.component";
import {AddBarCodeComponent} from "./components/add-bar-code/add-bar-code.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'/login',component:LoginComponent},
  {path:'/list',component:BarCodesListComponent},
  {path:'/add',component:AddBarCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
