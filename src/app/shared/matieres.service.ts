import { Injectable } from '@angular/core';
import { Matiere } from '../assignments-new/matiere.model';
import { CrudApiService } from './crud-api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatieresService extends CrudApiService<Matiere> {
  override url: string = `${environment.apiUrl}/matieres`;

  constructor(public http: HttpClient) { super(); }
findByText(searchText: string) {
    const requestUrl = new URL(this.url);
    requestUrl.searchParams.append('search', searchText);
    requestUrl.searchParams.append('no-paging', String(1));
    return this.http.get(requestUrl.toString());
  }
}
