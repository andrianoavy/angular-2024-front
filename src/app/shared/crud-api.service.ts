import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

export abstract class CrudApiService<TModel> {

  abstract url: string
  abstract http: HttpClient

  public save(entry: TModel): Observable<TModel> {
    return this.http.post<TModel>(this.url, entry);
  }

  public saveMany(entries: TModel[]): Observable<TModel> {
    return this.http.post<TModel>(this.url, entries);
  }

  public findById(id: any): Observable<TModel> {
    return this.http.get<TModel>(`${this.url}/${id}`);
  }
  public findAll(page?: number, items?: number): Observable<TModel[]> {
    let params = []
    if (page) {
      params.push(`page=${page}`);
    }
    if (items) {
      params.push(`items=${items}`);
    }

    const requestUrl = `${this.url}${(params.length > 0) ? '?' : ''}${params.join('&')}`;

    return this.http.get<TModel[]>(requestUrl);
  }

  public update(id:any, entry: TModel): Observable<TModel> {
    return this.http.put<TModel>(`${this.url}/${id}`, entry);
  }

  public delete(id: any) {
    return this.http.delete<TModel>(`${this.url}/${id}`);
  }
}
