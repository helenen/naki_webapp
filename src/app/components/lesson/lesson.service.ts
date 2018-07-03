import { Chapter } from './../../models/chapter';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";
import {Lesson} from "../../models/lesson";
import {Observable} from "rxjs/Observable";
import {Url} from "../../constants/Url";

@Injectable()
export class LessonService {
  private apiUrl = environment.api_Url;
  lesson = Lesson;

  constructor(private http: Http) {}
  getchapters() {
    return this.http
      .get(this.apiUrl + "/chapters")
      .map((res: Response) => res.json());
  }

  getchapterByLesson(id): Observable<Lesson> {
    return this.http
      .get(Url.LESSON, id)
      .map((res: Response) => res.json());
  }
}
