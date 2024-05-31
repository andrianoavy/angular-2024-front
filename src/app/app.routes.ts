import { Routes } from '@angular/router';
import { AssignmentsNewComponent } from './assignments-new/assignments-new.component';
import {
  AddAssignmentComponent as NewAddAssignmentComponent
} from './assignments-new/add-assignment/add-assignment.component';
import { StudentsComponent } from './students/students.component';
import { MatieresComponent } from './matieres/matieres.component';

export const routes: Routes = [
  { path: '', redirectTo: '/devoirs', pathMatch: 'full' },
  { path: 'home', redirectTo: '/devoirs', pathMatch: 'full' },
  { path: 'devoirs/edit/:id', component: NewAddAssignmentComponent },
  { path: 'devoirs/add', component: NewAddAssignmentComponent },
  { path: 'devoirs', component: AssignmentsNewComponent },
  { path: 'devoirs/student', component: AssignmentsNewComponent, data:{id:'student'} },
  { path: 'etudiants', component: StudentsComponent },
  { path: 'matieres', component: MatieresComponent },
  // {
  //   path: "example-guard",
  //   component: AssignmentsNewComponent,
  //   canActivate: [authGuard]
  // }
];
