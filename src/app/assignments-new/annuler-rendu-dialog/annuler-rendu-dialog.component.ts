import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-annuler-rendu-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './annuler-rendu-dialog.component.html',
  styleUrl: './annuler-rendu-dialog.component.css'
})

export class AnnulerRenduDialogComponent {
  constructor(
  public dialogRef: DialogRef<boolean>,
  @Inject(DIALOG_DATA) public data:boolean
  ) {}

}
