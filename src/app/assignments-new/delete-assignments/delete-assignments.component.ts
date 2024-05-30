import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-assignments',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-assignments.component.html',
  styleUrl: './delete-assignments.component.css'
})
export class DeleteAssignmentsComponent {

  constructor(
  public dialogRef: DialogRef<boolean>,
  @Inject(DIALOG_DATA) public data:boolean
  ) {}

}
