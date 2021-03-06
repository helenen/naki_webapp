import { AllLessonsComponent } from './components/all-lessons/all-lessons.component';
import { Component } from '@angular/core';
import { CoursService } from './components/cours/cours.service';
import { CoursComponent } from './components/cours/cours.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { ExerciseService } from './components/exercise/exercise.service';
import { LessonService } from './components/lesson//lesson.service';
import { LevelService } from './components/level/level.service';
import { ThemeService } from './components/theme/theme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CoursDetailsService } from './components/cours-details/cours-details.service';
import { CoursDetailsComponent } from './components/cours-details/cours-details.component';
import { AllExercisesService } from './components/all-exercises/all-exercises.service';
import { AllLessonservice } from './components/all-lessons/all-lessons.service';
import { HeaderComponent } from './components/header/header.component';

import { AppComponent } from './app.component';
import { LevelComponent } from './components/level/level.component';
import { MenuComponent } from './components/menu/menu.component';
import { ThemeComponent } from './components/theme/theme.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AllExercisesComponent } from './components/all-exercises/all-exercises.component';

import { GenerateURLService } from './general_service/generateUrl.service';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

const Routes: Route[] = [
  { path: '', component: LevelComponent },
  { path: 'level/:id', component: ThemeComponent },
  { path: 'level/:id/:themeName/lessons', component: LessonComponent },
  {
    path: 'level/:levelId/:themeName/lesson/:lessonId/chapitre',
    component: CoursComponent
  },
  {
    path: 'level/:levelId/:themeName/lesson/:lessonId/chapitre/:coursId',
    component: CoursDetailsComponent
  },
  {
    path:
      'level/:levelId/:themeName/lesson/:lessonId/chapitre/:coursId/exercise/:exerciseId',
    component: ExerciseComponent
  },
  { path: 'allLessons', component: AllLessonsComponent },
  {
    path: 'level/:levelId/:themeName/lesson/:lessonId/chapitre',
    component: LessonComponent
  },
  { path: 'allExercises', component: AllExercisesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    MenuComponent,
    ThemeComponent,
    LessonComponent,
    ExerciseComponent,
    CoursComponent,
    CoursDetailsComponent,
    AllExercisesComponent,
    AllLessonsComponent,
    HeaderComponent
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
    MatListModule
  ],
  providers: [
    ThemeService,
    LevelService,
    LessonService,
    GenerateURLService,
    CoursService,
    CoursDetailsService,
    ExerciseService,
    AllExercisesService,
    AllLessonservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
