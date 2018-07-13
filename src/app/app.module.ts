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
import { LessonDetailsComponent } from "./components/lesson-details/lesson-details.component";
import { MaterialModule } from "./material/material.module";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";


const Routes: Route[] = [
  { path: "", component: LevelComponent },
  { path: "themes", component: ThemeComponent },
  { path: "lessons", component: LessonComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuComponent,
    ThemeComponent,
    LessonComponent,
    LessonDetailsComponent
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
    FlexLayoutModule
  ],
  providers: [ThemeService, LevelService, LessonService, GenerateURLService],
  bootstrap: [AppComponent]
})
export class AppModule {}
