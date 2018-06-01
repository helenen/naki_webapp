import { LevelService } from './components/level/level.service';
import { TopicService } from './components/topic/topic.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LevelComponent } from './components/level/level.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { TopicComponent } from './components/topic/topic.component';
import { LessonComponent } from './components/lesson/lesson.component';

const Routes: Route[] = [
  { path: '', component: LevelComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'topics', component: TopicComponent },
  { path: 'lessons', component: LessonComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuComponent,
    ContactComponent,
    ParcoursComponent,
    TopicComponent,
    LessonComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(Routes), NgbModule.forRoot(), HttpModule],
  providers: [TopicService, LevelService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
