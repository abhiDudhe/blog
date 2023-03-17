import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { Blog5Component } from './blog5/blog5.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path: "",
  component:HomeComponent},
{  path: "blog1",
  component:Blog1Component},
  {  path: "blog2",
  component:Blog2Component},
  {  path: "blog3",
  component:Blog3Component},
  {  path: "blog4",
  component:Blog4Component},
  {  path: "blog5",
  component:Blog5Component},
  {  path: "contact",
  component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
