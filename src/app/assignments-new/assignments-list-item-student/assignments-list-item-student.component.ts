import { Component, Input } from '@angular/core';
import { Assignment } from '../assignments-new.model';
import {  MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../shared/auth.service';

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
  illustration!: string;
  avatar!: string;

  constructor(private authService:AuthService) {
    const random = Math. floor(Math. random() * 10) + 1;
    this.avatar = this.authService.getRandomAvatar();
    this.illustration = 'assets/images/img'+random+'.svg'
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
