import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

import { LucideAngularModule } from 'lucide-angular';
import { Mail, MapPin, Github, Linkedin } from 'lucide-angular';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Mail, MapPin, Github, Linkedin }),
    SidebarComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CvComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
