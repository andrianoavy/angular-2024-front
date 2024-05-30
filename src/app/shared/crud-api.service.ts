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
  public findAll(search?: string, page?: number, items?: number): Observable<any> {
    let requestURL = new URL(this.url);
    if (search) {
      requestURL.searchParams.append('search', search!);
    }
    if (page) {
      requestURL.searchParams.append('page', String(page!));
    }
    if (items) {
      requestURL.searchParams.append('items', String(items!));
    }

    return this.http.get(requestURL.toString());
  }

  public update(entry: TModel): Observable<any> {
    return this.http.put(this.url, entry);
  }

  public delete(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
