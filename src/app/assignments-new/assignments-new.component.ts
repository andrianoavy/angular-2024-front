import { Component, OnInit } from '@angular/core';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { ActivatedRoute } from '@angular/router';
import { AutorizationService } from '../autorization.service';

@Component({
  selector: 'app-assignments-new',
  standalone: true,
  imports: [AssignmentsListComponent],
  templateUrl: './assignments-new.component.html',
  styleUrl: './assignments-new.component.css'
})

export class AssignmentsNewComponent implements OnInit {

  constructor(private autorization:AutorizationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.data['id'];

    this.autorization.assignRole(id);
  }

}
