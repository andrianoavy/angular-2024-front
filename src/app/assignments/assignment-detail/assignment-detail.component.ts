import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatCheckboxModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input()
  assignmentTransmis!: Assignment|undefined;
  @Output()
  deleteAssignment = new EventEmitter();

  onAssignmentRendu() {
    // on a cliqué sur la checkbox, on change le statut de l'assignment
    if(this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
    }
  }

  onDelete() {
    // on va émettre un événement pour prévenir le composant parent
    this.deleteAssignment.emit();
  }
}
