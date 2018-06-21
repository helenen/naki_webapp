import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";

@Injectable()
export class LevelService {
  private apiUrl = environment.api_Url;
  constructor(private http: Http) {}

  getLessons() {
    return this.http
      .get(this.apiUrl + "/lessons")
      .map((res: Response) => res.json());
  }
  getExercises() {
    return this.http
      .get(this.apiUrl + "/exercises")
      .map((res: Response) => res.json());
  }
  getchapters() {
    return this.http
      .get(this.apiUrl + "/chapters")
      .map((res: Response) => res.json());
  }
}
