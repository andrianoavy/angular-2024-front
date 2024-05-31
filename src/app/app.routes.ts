import { Routes } from '@angular/router';
import { AssignmentsNewComponent } from './assignments-new/assignments-new.component';
import {
  AddAssignmentComponent as NewAddAssignmentComponent
} from './assignments-new/add-assignment/add-assignment.component';
import { StudentsComponent } from './students/students.component';
import { MatieresComponent } from './matieres/matieres.component';
import { AuthGuard } from './shared/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/devoirs', pathMatch: 'full' },
  { path: 'home', redirectTo: '/devoirs', pathMatch: 'full' },
  { path: 'devoirs/edit/:id', component: NewAddAssignmentComponent, canActivate: [AuthGuard], data: { role: ['admin'] } },
  { path: 'devoirs/add', component: NewAddAssignmentComponent, canActivate: [AuthGuard], data: { role: ['admin'] }},
  { path: 'devoirs', component: AssignmentsNewComponent},
  { path: 'etudiants', component: StudentsComponent, canActivate: [AuthGuard], data: { role: ['admin','prof'] }},
  { path: 'matieres', component: MatieresComponent, canActivate: [AuthGuard], data: { role: ['admin'] }},
  // { path: 'student', component: StudentComponent, canActivate: [AuthGuard], data: { role: 'student' } },
  // { path: 'prof', component: ProfComponent, canActivate: [AuthGuard], data: { role: 'prof' } },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'admin' } },

  // {
  //   path: "example-guard",
  //   component: AssignmentsNewComponent,
  //   canActivate: [authGuard]
  // }
];
