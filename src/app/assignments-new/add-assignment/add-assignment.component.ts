import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { AssignmentsNewService } from '../../shared/assignments-new.service';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { Assignment } from '../assignments-new.model';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

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
    MatInputModule,
    MatSelectModule,
    DatePipe,
  ],
  providers: [provideNativeDateAdapter(), {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  groupList: string[] = [
    "G1",
    "G2"
  ];
  infoDevoirFormGroup = this._formBuilder.group({
    nomDevoir: ['', Validators.required],
    dateLimite: ['', Validators.required],
  });
  elevesFormGroup = this._formBuilder.group({
    group: ['', Validators.required],
  });

  constructor(private assignmentService: AssignmentsNewService, private _formBuilder: FormBuilder) { }

  save() {
    if(this.infoDevoirFormGroup.invalid || this.elevesFormGroup.invalid){
    return;
    }
    let assignment = {
      nom: this.infoDevoirFormGroup.get('nomDevoir')!.value,
      dateLimite: new Date(this.infoDevoirFormGroup.get('dateLimite')!.value!),
      rendus: [],
      nonRendus: []
    } as Assignment;
    this.assignmentService.save(assignment).subscribe(response => {
      console.log(response);
    });
  }
}
