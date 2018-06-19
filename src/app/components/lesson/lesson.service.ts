import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { environment } from "../../../environments/environment";
import "rxjs/add/operator/map";

@Injectable()
export class LessonService {
  private apiUrl = environment.api_Url;
  constructor(private http: Http) {}
  getchapters() {
    return this.http
      .get(this.apiUrl + "/chapters")
      .map((res: Response) => res.json());
  }
}
