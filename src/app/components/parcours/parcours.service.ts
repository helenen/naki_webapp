import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ParcoursService {
private apiUrl = 'http://localhost:8080';

  constructor(private http: Http) { }

  getCours(){
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }
}