import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleTrendsComponent } from './google-trends/google-trends.component';
import { GoogleTrendsDateComponent } from './google-trends-date/google-trends-date.component';


const routes: Routes = [
  {path:'google-trends', component: GoogleTrendsComponent},
  {path:'google-trends-date', component: GoogleTrendsDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
