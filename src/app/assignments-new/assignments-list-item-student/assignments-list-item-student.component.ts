import { Component, Input } from '@angular/core';
import { Assignment } from '../assignments-new.model';
import {  MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-assignments-list-item-student',
  standalone: true,
  imports: [MatCardModule, MatButton, DatePipe, MatListModule, MatDividerModule],
  templateUrl: './assignments-list-item-student.component.html',
  styleUrl: './assignments-list-item-student.component.css'
})
export class AssignmentsListItemStudentComponent {

  showDetails: boolean = false;
  @Input() assignment!: Assignment;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
