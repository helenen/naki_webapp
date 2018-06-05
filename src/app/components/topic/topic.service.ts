import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from "../../../environments/environment";

@Injectable()
export class TopicService {
  private apiUrl = environment.apiUrl;

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

  getExercices() {
    return this.http
      .get(this.apiUrl + "/exercices")
      .map((res: Response) => res.json());
  }
}
