import { Injectable } from '@angular/core';
import { Matiere } from '../assignments-new/matiere.model';
import { CrudApiService } from './crud-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatieresService extends CrudApiService<Matiere> {
  // override url: string = "http://10.42.0.1:3000/matieres";
  override url: string = "http://10.42.0.1:8010/api/matieres";

  constructor(public http: HttpClient) { super(); }
findByText(searchText: string) {
    const requestUrl = new URL(this.url);
    requestUrl.searchParams.append('search', searchText);
    requestUrl.searchParams.append('no-paging', String(1));
    return this.http.get(requestUrl.toString());
  }
}
