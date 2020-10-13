import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from "./components/first-page/first-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AddBarCodeComponent} from "./components/add-bar-code/add-bar-code.component";
import {BarCodesListComponent} from "./components/bar-codes-list/bar-codes-list.component";

const routes: Routes = [
  {path:'login',component:FirstPageComponent},
  {path:'',component:HomePageComponent},
  {path:'add',component:AddBarCodeComponent},
  {path:'list',component:BarCodesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

