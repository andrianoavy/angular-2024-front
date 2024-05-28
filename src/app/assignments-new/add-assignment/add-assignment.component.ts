import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { AssignmentsNewService } from '../../shared/assignments-new.service';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  infoDevoirFormGroup = this._formBuilder.group({
    nomDevoir: ['', Validators.required],
    dateLimite: ['', Validators.required],
  });
  elevesFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private assignmentService:AssignmentsNewService ,private _formBuilder: FormBuilder) { }

  save() {
    this.assignmentService.save();
  }
}
