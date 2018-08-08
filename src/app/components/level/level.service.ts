import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import "rxjs/add/operator/map";
import {GenerateURLService} from "../../general_service/generateUrl.service";
import {Level} from "../../models/level";



@Injectable()
export class LevelService {
  lessonsByLevel: Level;

  constructor( private generateURLService: GenerateURLService) {
   
  }

  getLevels(): Observable<Level> {
    return this.generateURLService
      .get( "/levels")
      .map((res: Response) => res.json());
    }

    getLessonsByLevel(): Observable<Level> {
      return this.generateURLService
      .get( "level/{id}/lesson")
      .map((res: Response) => res.json());

    }


  }


