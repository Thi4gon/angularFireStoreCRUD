import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//  { path: '', redirectTo: '/home', pathMatch: 'full'},
//  { path: 'home', component: HomeComponent,data: { num: 1 }},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
