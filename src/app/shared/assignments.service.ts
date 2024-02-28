import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [];
  
  constructor(private logService:LoggingService,
              private http:HttpClient) { }

  uri = 'http://localhost:8010/api/assignments';

  // retourne tous les assignments
  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri);
  }

  // renvoie un assignment par son id, renvoie undefined si pas trouvé
  getAssignment(id:number):Observable<Assignment|undefined> {
    let a = this.assignments.find(a => a.id === id);
    return of(a);
  }

  // ajoute un assignment et retourne une confirmation
  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);
    this.logService.log(assignment.nom, "ajouté");
    return of("Assignment ajouté avec succès");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
   // l'assignment passé en paramètre est le même objet que dans le tableau
   // plus tard on verra comment faire avec une base de données
   // il faudra faire une requête HTTP pour envoyer l'objet modifié
    this.logService.log(assignment.nom, "modifié");
    return of("Assignment modifié avec succès");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    // on va supprimer l'assignment dans le tableau
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    this.logService.log(assignment.nom, "supprimé");
    return of("Assignment supprimé avec succès");
  }
}
