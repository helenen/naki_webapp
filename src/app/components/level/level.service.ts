import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LevelService {
  constructor(private http: HttpClient) { }
}
