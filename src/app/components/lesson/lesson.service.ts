import { Chapter } from './../../models/chapter';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";

import {Lesson} from "../../models/lesson";
import {Observable} from "rxjs/Observable";
import {GenerateURLService} from "../../general_service/generateUrl.service";

import { Observable } from "rxjs";


@Injectable()
export class LessonService {
  private apiUrl = environment.api_Url;

  lesson = Lesson;

  constructor(private http: Http, private generateURLService: GenerateURLService) {}

  getchapters(): Observable<Chapter> {

    return this.http
      .get(this.apiUrl + "/chapters")
      .map((res: Response) => res.json());
  }
/**
     * Makes an HTTP GET call to retrieve a specific oldProjecct using its ID
     * @param id of the project requested
     * @returns {Observable<Lesson>} the project requested
     */
  getchapterByLesson(id: number): Observable<Lesson[]> {
    return this.generateURLService
      .get("lessons", id)
      .map((res: Response) => res.json());
  }
}
