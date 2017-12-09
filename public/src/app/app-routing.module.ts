import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { LandingComponent } from "./landing/landing.component"
import { SkillsComponent } from "./home/skills/skills.component"
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
