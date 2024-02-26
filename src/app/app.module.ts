import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './features/portfolio/profile/profile.component';
import { ProjectsComponent } from './features/portfolio/projects/projects.component';
import { AboutComponent } from './features/portfolio/about/about.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent, ProjectsComponent, AboutComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
