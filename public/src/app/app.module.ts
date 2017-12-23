import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyStoryComponent } from './home/my-story/my-story.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsComponent } from './home/skills/skills.component';
import { AwardsComponent } from './home/awards/awards.component';
import { HobbiesComponent } from './home/hobbies/hobbies.component';
  import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { LandingComponent } from './home/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyStoryComponent,
    ProjectsComponent,
    SkillsComponent,
    AwardsComponent,
    HobbiesComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
