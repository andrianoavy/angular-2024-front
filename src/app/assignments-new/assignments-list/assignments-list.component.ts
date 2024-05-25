import { Component, OnInit } from '@angular/core';
import { AssignmentsNewService } from '../../shared/assignments-new.service';
import { Assignment } from '../assignments-new.model';
import { Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AssignmentsListItemComponent } from '../assignments-list-item/assignments-list-item.component';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-assignments-list',
  standalone: true,
  imports: [AsyncPipe, AssignmentsListItemComponent, MatList, MatListItem],
  templateUrl: './assignments-list.component.html',
  styleUrl: './assignments-list.component.css'
})
export class AssignmentsListComponent implements OnInit {

  assignmentsStudents?: Observable<Assignment[]>;
  assignmentsProfs?: Observable<Assignment[]>;

  constructor(private service: AssignmentsNewService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.assignmentsStudents = this.service.getAssignmentsStudents();
    this.assignmentsProfs = this.service.getAssignmentsProfs();
  }

}
