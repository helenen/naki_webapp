import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { GenerateURLService } from '../../general_service/generateUrl.service';

@Injectable()
export class AllExercisesService {
  lessonId: number;
  coursId: number;

  constructor(private generateURLService: GenerateURLService) {}
  getExercises() {
    return this.generateURLService
      .get('/exercises')
      .map((res: Response) => res.json());
  }
}
