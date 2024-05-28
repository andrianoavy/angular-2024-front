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
  private urlStudent = 'http://10.42.0.1:3000/assignments-students';
  private urlProf = 'http://10.42.0.1:3000/assignments-profs';
  private urlAdmin = 'http://10.42.0.1:3000/assignments-admin';

  constructor(private http: HttpClient) { }

  getAssignmentsStudents(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.urlStudent)
      .pipe(
        catchError(this.handleError('getAssigments', [] as Assignment[]))
      );
  }
  getAssignmentsProfs(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.urlProf)
      .pipe(
        catchError(this.handleError('getAssigments', [] as Assignment[]))
      );
  }
  getAssignmentsAdmin(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.urlAdmin)
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

  save() {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
