import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import { AssignmentsNewComponent } from './assignments-new/assignments-new.component';
import {
  AddAssignmentComponent as NewAddAssignmentComponent
} from './assignments-new/add-assignment/add-assignment.component';
import { StudentsComponent } from './students/students.component';
import { MatieresComponent } from './matieres/matieres.component';

export const routes: Routes = [
  { path: '', redirectTo: '/new', pathMatch: 'full' },
  { path: 'new/add', component: NewAddAssignmentComponent },
  { path: 'new/:id', component: AssignmentsNewComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'matieres', component: MatieresComponent },
  { path: 'home', component: AssignmentsComponent },
  { path: "add", component: AddAssignmentComponent },
  { path: "assignment/:id", component: AssignmentDetailComponent },
  {
    path: "assignment/:id/edit",
    component: EditAssignmentComponent,
    canActivate: [authGuard]
  }
];
