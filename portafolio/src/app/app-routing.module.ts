import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';

const appRoutes : Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'personal',
    component: PersonalComponent
  },
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
