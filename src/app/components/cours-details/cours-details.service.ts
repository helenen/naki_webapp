import { LessonService } from './../lesson/lesson.service';
import { Lesson } from './../../models/lesson';
import { Chapter } from './../../models/chapter';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

import { GenerateURLService } from '../../general_service/generateUrl.service';

import { Observable } from 'rxjs';

@Injectable()
export class CoursDetailsService {
  lessonId: number;
  coursId: number;

  constructor(private generateURLService: GenerateURLService) {}

  getTextsByChapter(coursId: number): Observable<Chapter> {
    return this.generateURLService
      .get(`chapter/${coursId}/texts`)
      .map((res: Response) => res.json());
  }
  getExercisesByChapter(coursId: number): Observable<Chapter> {
    return this.generateURLService
      .get(`chapter/${coursId}/exercises`)
      .map((res: Response) => res.json());
  }

  getCoursByLesson(lessonId: number): Observable<Lesson[]> {
    return this.generateURLService
      .get(`lesson/${lessonId}/chapters`)
      .map((res: Response) => res.json());
  }
}
