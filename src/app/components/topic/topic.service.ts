import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TopicService {
private apiUrl = 'http://localhost:8080/lessons';

  constructor(private http: Http) { }

  getLessons(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
}
