import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Gjcase } from '../model/Gjcase';

@Injectable({
  providedIn: 'root'
})
export class GjcserviceService {
  baseurl= ' http://localhost:3000/gjcase'
  constructor(private http: HttpClient) { }

  GetAll():Observable<Gjcase[]>{
    return this.http.get<Gjcase[]>(" http://localhost:3000/gjcase");
  }
}
