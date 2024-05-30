import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignments-new.model';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AutorizationService } from '../../autorization.service';
import { DragdropRendusComponent } from '../dragdrop-rendus/dragdrop-rendus.component';
import { MatIconModule } from '@angular/material/icon';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DialogData } from '../rendu-dialog/rendu-dialog.component';
import { DeleteAssignmentsComponent } from '../delete-assignments/delete-assignments.component';
import { AssignmentsNewService } from '../../shared/assignments-new.service';

@Component({
  selector: 'app-assignments-list-item',
  standalone: true,
  imports: [DragdropRendusComponent, MatCardModule, MatButton, DatePipe, MatListModule, MatDividerModule, MatIconModule],
  templateUrl: './assignments-list-item.component.html',
  styleUrl: './assignments-list-item.component.css'
})
export class AssignmentsListItemComponent implements OnInit {

  isAdmin!: boolean;
  showDetails: boolean = false;
  @Input() assignment!: Assignment;
  constructor(private service: AssignmentsNewService, public dialog: Dialog, private autorization: AutorizationService) { }

  ngOnInit(): void {
    this.isAdmin = this.autorization.isAdmin();
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  update() {

  }

  @Output() deleteEvent = new EventEmitter<string>();

  delete() {
    this.openDeleteDialog(() => {
      this.service.delete(this.assignment._id!).subscribe((data) => {
        console.log(data);
        this.deleteEvent.emit(this.assignment._id);
      });
    });
  }

  openDeleteDialog(doOnClosed: () => void) {
    const dialogRef = this.dialog.open<DialogData>(DeleteAssignmentsComponent, {
      data: true,
    });

    dialogRef.closed.subscribe(result => {
      if (result) {
        doOnClosed();
      }
    });
  }
}
