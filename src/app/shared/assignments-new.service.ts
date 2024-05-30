import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from '../assignments-new/assignments-new.model';
import { Observable, catchError, of } from 'rxjs';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { Auteur } from '../assignments-new/auteur.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsNewService {
  private url = 'http://10.42.0.1:8010/api/assignments';
  private urlStudent = 'http://10.42.0.1:3000/assignments-students';
  private urlProf = 'http://10.42.0.1:3000/assignments-profs';
  private urlAdmin = 'http://10.42.0.1:3000/assignments-admin';

  constructor(private http: HttpClient) { }

  getAssignmentsStudents(id:string): Observable<any> {
    let requestUrl = new URL(this.url);
    requestUrl.searchParams.append('role', 'etudiant');
    requestUrl.searchParams.append('idEtudiant', id);

    return this.http.get(requestUrl.toString())
      .pipe(
        catchError(this.handleError('getAssigments', {}))
      );
  }

  findAll(): Observable<any> {
    return this.http.get(this.url)
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
    return this.http.put(`${this.url}/noter`, etudiant).pipe(catchError(this.handleError('save', null)));
  }

  annulerNote(etudiant: any){
    return this.http.put(`${this.url}/annuler-note`, etudiant).pipe(catchError(this.handleError('save', null)));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(error);
      return of(result as T);
    };
  }
}
