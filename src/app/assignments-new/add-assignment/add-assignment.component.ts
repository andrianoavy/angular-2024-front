import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { AssignmentsNewService } from '../../shared/assignments-new.service';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Assignment } from '../assignments-new.model';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Observable, startWith, map } from 'rxjs';
import { MatieresService } from '../../shared/matieres.service';
import { Matiere } from '../matiere.model';
import { requireMatch } from '../../shared/validators/require-match';

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
    AsyncPipe,
    MatAutocompleteModule,
    FormsModule,
    NgIf,
  ],
  providers: [provideNativeDateAdapter(), {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  }],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  groupOptions: string[] = [
    "G1",
    "G2"
  ];
  matiereOptions!: Matiere[];
  matiere: Matiere = { id: '', nom: '', responsable: '' } as Matiere;

  infoDevoirFormGroup = this._formBuilder.group({
    nomDevoir: ['', Validators.required],
    matiere: new FormControl<Matiere>({} as any, [Validators.required, requireMatch]),
    dateLimite: ['', Validators.required],
  });

  elevesFormGroup = this._formBuilder.group({
    group: ['', Validators.required],
  });

  constructor(private assignmentService: AssignmentsNewService, private _matiereService: MatieresService, private _formBuilder: FormBuilder) { }

  filteredOptions!: Observable<Matiere[]>;

  ngOnInit() {
    this._matiereService.findAll().subscribe(
      (data) => {
        this.matiereOptions = data;
        this.filteredOptions = this.infoDevoirFormGroup.controls['matiere'].valueChanges.pipe(
          startWith(''),
          map(value => value ? this._filter(value) : this.matiereOptions.slice()),
        );
      }
    );
  }

  private _filter(value: any): Matiere[] {
    const filterValue = value.toLowerCase();

    return this.matiereOptions.filter(option => option.nom.toLowerCase().includes(filterValue));
  }

  displayFn(matiere: Matiere): string {
    return matiere && matiere.nom ? matiere.nom : '';
  }

  save() {
    if (this.infoDevoirFormGroup.invalid || this.elevesFormGroup.invalid) {
      return;
    }
    let assignment = {
      nom: this.infoDevoirFormGroup.get('nomDevoir')!.value,
      dateLimite: new Date(this.infoDevoirFormGroup.get('dateLimite')!.value!),
      matiere: this.infoDevoirFormGroup.controls['matiere'].value as unknown,
      rendus: [],
      nonRendus: []
    } as Assignment;
    this.assignmentService.save(assignment).subscribe(response => {
      console.log(response);
    });
  }
}
