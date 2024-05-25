import { Component, Input } from '@angular/core';
import { Assignment } from '../assignments-new.model';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-assignments-list-item',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardHeader, MatButton, DatePipe],
  templateUrl: './assignments-list-item.component.html',
  styleUrl: './assignments-list-item.component.css'
})
export class AssignmentsListItemComponent {

  isStudent: boolean = true;
  showDetails: boolean = false;
  @Input() assignment!: Assignment;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
