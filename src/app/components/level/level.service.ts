import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";

@Injectable()
export class LevelService {
  private apiUrl = environment.api_Url;
  constructor(private http: Http) {}

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
  getSubThemes() {
    return this.http
      .get(this.apiUrl + "/subThemes")
      .map((res: Response) => res.json());
  }
}
