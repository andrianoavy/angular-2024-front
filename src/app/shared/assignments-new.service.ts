import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from '../assignments-new/assignments-new.model';
import { Observable, catchError, of } from 'rxjs';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { Auteur } from '../assignments-new/auteur.model';
import { AutorizationService } from '../autorization.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsNewService {
  private url: string = `${environment.apiUrl}/assignments`;

  constructor(private http: HttpClient, private _auto: AutorizationService) { }

  getAssignmentsStudents(search?:string, page?:number, limit?:number): Observable<any> {
    let requestUrl = new URL(this.url);

    requestUrl.searchParams.append('role', 'etudiant');
    requestUrl.searchParams.append('idEtudiant', this._auto.idStudent());

    if (search) {
      requestUrl.searchParams.append('search', search!);
    }
    if (page) {
      requestUrl.searchParams.append('page', String(page!));
    }
    if (limit) {
      requestUrl.searchParams.append('limit', String(limit!));
    }

    return this.http.get(requestUrl.toString())
      .pipe(
        catchError(this.handleError('getAssigments', {}))
      );
  }

  findAll(search?:string, page?:number, limit?:number): Observable<any> {
    let requestURL = new URL(this.url);

    if(this._auto.isStudent()) {
      return this.getAssignmentsStudents(search, page,limit);
    }

    if (search) {
      requestURL.searchParams.append('search', search!);
    }
    if (page) {
      requestURL.searchParams.append('page', String(page!));
    }
    if (limit) {
      requestURL.searchParams.append('limit', String(limit!));
    }

    return this.http.get(requestURL.toString())
      .pipe(
        catchError(this.handleError('getAssigments', [] as Assignment[]))
      );
  }

  rendreAssignment(assignmentId: string, auteur: Auteur): boolean {
    if (auteur.note === 0 || auteur.note) {
      console.log(auteur);
      console.log("ajout du nouvel assignment");
      return true;
    }
    else {
      console.log("pas de notes");
      return false;
    }
  }

  annulerRendu(assignmentId: string, auteur: Auteur): Boolean {
    console.log("annuler rendu");
    return true;
  }

  save(assignment: Assignment): Observable<Assignment | null> {
    console.log(assignment);
    return this.http.post<Assignment>(this.url, { ...assignment }).pipe(catchError(this.handleError('save', null)));
  }

  noter(etudiant: any){
    return this.http.put(`${this.url}/noter`, etudiant).pipe(catchError(this.handleError('noter', null)));
  }

  annulerNote(etudiant: any){
    return this.http.put(`${this.url}/annuler-note`, etudiant).pipe(catchError(this.handleError('annuler', null)));
  }

  delete(_id: string) {
    return this.http.delete(`${this.url}/${_id}`).pipe(catchError(this.handleError('delete', null)));
  }

  findById(_id: string) {
    return this.http.get(`${this.url}/${_id}`).pipe(catchError(this.handleError('findById', null)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(error);
      return of(result as T);
    };
  }
}
