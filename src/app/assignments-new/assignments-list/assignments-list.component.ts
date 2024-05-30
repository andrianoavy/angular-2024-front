import { Component, OnInit } from '@angular/core';
import { AssignmentsNewService } from '../../shared/assignments-new.service';
import { Assignment } from '../assignments-new.model';
import { AssignmentsListItemComponent } from '../assignments-list-item/assignments-list-item.component';
import { MatList, MatListItem } from '@angular/material/list';
import { ROLE } from '../../shared/role.enum';
import { AssignmentsListItemStudentComponent } from '../assignments-list-item-student/assignments-list-item-student.component';
import { AutorizationService } from '../../autorization.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assignments-list',
  standalone: true,
  imports: [RouterLink, MatButtonModule, AssignmentsListItemStudentComponent, AssignmentsListItemComponent, MatList, MatListItem],
  templateUrl: './assignments-list.component.html',
  styleUrl: './assignments-list.component.css'
})
export class AssignmentsListComponent implements OnInit {

  isStudent!: boolean;
  assignments?: Assignment[];

  constructor(private autorization: AutorizationService, private service: AssignmentsNewService) { }

  ngOnInit(): void {
    this.isStudent = this.autorization.isStudent();
    this.fetchData();
  }

  fetchData() {
    switch (this.autorization.getRole()) {
      case ROLE.Student:
        this.service.getAssignmentsStudents().subscribe((response) => {
          this.assignments = response;
        });
        break;
      default:
        this.service.findAll().subscribe((response) => {
          this.assignments = response.docs;
        });
        break;
    }
  }
}
