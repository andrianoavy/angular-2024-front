import { Injectable } from '@angular/core';
import { CrudApiService } from './crud-api.service';
import { Auteur as Student} from '../assignments-new/auteur.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends CrudApiService<Student> {
  // override url: string = "http://10.42.0.1:3000/students";
  override url: string = "http://10.42.0.1:8010/api/etudiants";

  constructor(public http:HttpClient) { super(); }

  getGroups() {
    return this.http.get(`${this.url}/groups`);
  }
}
