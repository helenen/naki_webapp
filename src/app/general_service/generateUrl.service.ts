import { LessonComponent } from "./../components/lesson/lesson.component";
import { Http,  Response } from "@angular/http";
import { environment } from "./../../environments/environment";
import {Observable} from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {Level} from "../models/level";

@Injectable()
export class GenerateURLService {
  private url: string = environment.api_Url;


  constructor(private http: Http) {}

  get(...path: any[]): Observable<Response> {
    return this.http.get(this.createUrl(...path));
  }

  private createUrl(...path: any[]): string {
    return this.url + "/" + path.join("/");
  }


}
