import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
  note:number;
  date?:Date;
  remarques?: string;
}

@Component({
  selector: 'app-rendu-dialog',
  standalone: true,
  imports: [FormsModule, MatDividerModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatInputModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './rendu-dialog.component.html',
  styleUrl: './rendu-dialog.component.css'
})
export class RenduDialogComponent {
  constructor(
    public dialogRef: DialogRef<DialogData>,
    @Inject(DIALOG_DATA) public data: DialogData
  ) {}
}
