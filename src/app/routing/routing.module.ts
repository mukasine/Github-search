import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { FormComponent } from '../profile-form/profile-form.component';
// import { GoalComponent } from './goal/goal.component';
// import { AboutComponent } from './about/about.component';
// import { NotFoundComponent } from '../not-found/not-found.component';
const routes:Routes=[
  {path:"form",component:FormComponent},
  // {path:"about",component:AboutComponent},
  // {path:"",redirectTo:"/goals",pathMatch:"full"},
  // {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
// export class RoutingModule { }






// Defining routes



export class RoutingModule { }
