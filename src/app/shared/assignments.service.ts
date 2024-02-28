import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de Michel Buffa",
      dateDeRendu: new Date("2024-02-15"),
      rendu:false
    },
    {
      nom:"Devoir SQL3 de Serge Miranda",
      dateDeRendu: new Date("2024-01-15"),
      rendu:true
    },
    {
      nom:"Devoir BD de Mr Gabriel Mopolo",
      dateDeRendu: new Date("2024-03-01"),
      rendu:false
    }
  ];
  constructor() { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);
    return of("Assignment ajouté avec succès");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
   // l'assignent passé en paramètre est le même objet que dans le tableau
   // plus tard on verra comment faire avec une base de données
   // il faudra faire une requête HTTP pour envoyer l'objet modifié
    return of("Assignment modifié avec succès");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    // on va supprimer l'assignment dans le tableau
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of("Assignment supprimé avec succès");
  }
}
