import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

export abstract class CrudApiService<TModel> {

  abstract url: string
  abstract http: HttpClient

  public save(entry: TModel): Observable<any> {
    return this.http.post(this.url, entry);
  }

  public saveMany(entries: TModel[]): Observable<any> {
    return this.http.post(this.url, entries);
  }

  public findById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  public findAll(page?: number, items?: number): Observable<any> {
    let params = []
    if (page) {
      params.push(`page=${page}`);
    }
    if (items) {
      params.push(`items=${items}`);
    }

    const requestUrl = `${this.url}${(params.length > 0) ? '?' : ''}${params.join('&')}`;

    return this.http.get(requestUrl);
  }

  public update(entry: TModel): Observable<any> {
    return this.http.put(this.url, entry);
  }

  public delete(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
