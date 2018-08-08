import { CoursComponent } from './components/cours/cours.component';
import { ExerciseComponent } from "./components/exercise/exercise.component";
import { ExerciseService } from "./components/exercise/exercise.service";
import { LessonService } from "./components/lesson//lesson.service";
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
import { ThemeComponent } from "./components/theme/theme.component";
import { LessonComponent } from "./components/lesson/lesson.component";

import {GenerateURLService} from "./general_service/generateUrl.service";
import { MaterialModule } from "./material/material.module";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import { WebStorageModule } from 'ngx-store';




const Routes: Route[] = [
  { path: "", component: LevelComponent },
  { path: "level/:id", component: ThemeComponent },
  { path: "level/:id/:themeName/lessons", component: LessonComponent },
  { path: "cours", component: CoursComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuComponent,
    ThemeComponent,
    LessonComponent,
    ExerciseComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    NgbModule.forRoot(),
    HttpModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    WebStorageModule
  ],
  providers: [ThemeService, LevelService, LessonService, GenerateURLService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
