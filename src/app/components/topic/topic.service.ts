import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../../../environments/environment";

@Injectable()
export class TopicService {
  private apiUrl = environment.api_Url;

  constructor(private http: Http) {}

  getLessons() {
    return this.http
      .get(this.apiUrl + "/lessons")
      .map((res: Response) => res.json());
  }
  getCours() {
    return this.http
      .get(this.apiUrl + "/cours")
      .map((res: Response) => res.json());
  }
  getExercises() {
    return this.http
      .get(this.apiUrl + "/exercises")
      .map((res: Response) => res.json());
  }
}
