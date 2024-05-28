import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogContent, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog'

@Component({
  selector: 'app-remarques-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatDialogClose, MatDialogActions, MatButtonModule],
  templateUrl: './remarques-dialog.component.html',
  styleUrl: './remarques-dialog.component.css'
})
export class RemarquesDialogComponent {

  constructor(public dialogRef: DialogRef<string[]>, @Inject(DIALOG_DATA) public remarques: string[]) { }
}
