import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Lesson } from '../../models/lesson';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { GenerateURLService } from '../../general_service/generateUrl.service';

@Injectable()
export class AllLessonservice {
  lessonId: number;
  coursId: number;

  constructor(private generateURLService: GenerateURLService) {}
  getLessons(): Observable<Lesson[]> {
    return this.generateURLService
      .get('/lessons')
      .map((res: Response) => res.json());
  }
}
