import { LessonService } from "./components/lesson//lesson.service";
import { ParcoursService } from "./components/parcours/parcours.service";
import { LevelService } from "./components/level/level.service";
import { ThemeService } from "./components/theme/theme.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { LevelComponent } from "./components/level/level.component";
import { MenuComponent } from "./components/menu/menu.component";
import { ParcoursComponent } from "./components/parcours/parcours.component";
import { ThemeComponent } from "./components/theme/theme.component";
import { LessonComponent } from "./components/lesson/lesson.component";
import { LevelPipe } from "./pipes/level.pipe";
import {GenerateURLService} from "./general_service/generateUrl.service";
import { LessonDetailsComponent } from "./components/lesson-details/lesson-details.component";

const Routes: Route[] = [
  { path: "", component: LevelComponent },
  { path: "cours", component: ParcoursComponent },
  { path: "themes", component: ThemeComponent },
  { path: "lessons", component: LessonComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuComponent,
    ParcoursComponent,
    ThemeComponent,
    LessonComponent,
    LevelPipe,
    LessonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [ThemeService, LevelService, ParcoursService, LessonService,LevelPipe, GenerateURLService],
  bootstrap: [AppComponent]
})
export class AppModule {}
