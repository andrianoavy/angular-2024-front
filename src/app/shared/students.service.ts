import { Injectable } from '@angular/core';
import { CrudApiService } from './crud-api.service';
import { Auteur as Student} from '../assignments-new/auteur.model'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends CrudApiService<Student> {
  override url: string = `${environment.apiUrl}/etudiants`;

  constructor(public http:HttpClient) { super(); }

  getGroups() {
    return this.http.get(`${this.url}/groups`);
  }

  getStaticStudentId(): Observable<any> {
    return this.http.get(`${this.url}/static`);
  }
}
