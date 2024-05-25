import { Component } from '@angular/core';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';

@Component({
  selector: 'app-assignments-new',
  standalone: true,
  imports: [AssignmentsListComponent],
  templateUrl: './assignments-new.component.html',
  styleUrl: './assignments-new.component.css'
})

export class AssignmentsNewComponent {

}
