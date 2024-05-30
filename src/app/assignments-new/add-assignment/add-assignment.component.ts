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
import { StudentsService } from '../../shared/students.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  groupOptions!: string[];
  matiereOptions!: Matiere[];
  matiere: Matiere = { id: '', nom: '', responsable: '' } as Matiere;

  infoDevoirFormGroup = this._formBuilder.group({
    nomDevoir: ['', Validators.required],
    matiere: new FormControl<Matiere>({} as any, [Validators.required, requireMatch]),
    dateLimite: ['', Validators.required],
  });

  elevesControl = new FormControl<string[]>([], Validators.required);
  id?: string;
  assignment?: Assignment;

  constructor(
    private router: Router,
    private _studentService: StudentsService,
    private _assignmentService: AssignmentsNewService,
    private _matiereService: MatieresService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder) { }

  filteredOptions!: Observable<Matiere[]>;

  ngOnInit() {
    this._studentService.getGroups().subscribe(
      (data) => {
        this.groupOptions = data as any
      }
    );

    this.infoDevoirFormGroup.controls['matiere'].valueChanges.subscribe((value) => {
      if (value) {
        this._filter(value);
      }
    }
    );

    this._matiereService.findAll().subscribe(
      (response) => {
        this.matiereOptions = response.docs;
        this.infoDevoirFormGroup.controls['matiere'].valueChanges.pipe(
          startWith(''),
          map(value => value ? this._filter(value) : []),
        );
      }
    );

    if (this._activatedRoute.snapshot.params['id']) {
      this.id = this._activatedRoute.snapshot.params['id'];
      this._assignmentService.findById(this.id!).subscribe(
        (data) => {
          if (data){
            this.assignment = data as any
            this.infoDevoirFormGroup.controls['matiere'].setValue(this.assignment!.matiere!)
            this.infoDevoirFormGroup.controls['nomDevoir'].setValue(this.assignment!.nom);
            this.infoDevoirFormGroup.controls['dateLimite'].setValue(this.assignment!.dateLimite.toString());
            this.elevesControl.setValue(this.assignment!.groups!);
            this.elevesControl.disable();
          }
        }
      );
    }

  }

  private _filter(value: any) {
    if (value) {
      this.filteredOptions = this._matiereService.findByText(value) as Observable<any>;
    }
  }

  displayFn(matiere: Matiere): string {
    return matiere && matiere.nom ? matiere.nom : '';
  }

  save() {
    if (this.infoDevoirFormGroup.invalid || this.elevesControl.invalid) {
      return;
    }
    let assignment = {
      nom: this.infoDevoirFormGroup.get('nomDevoir')!.value,
      dateLimite: new Date(this.infoDevoirFormGroup.get('dateLimite')!.value!),
      matiere: this.infoDevoirFormGroup.controls['matiere'].value as unknown,
      rendus: [],
      nonRendus: [],
      group: this.elevesControl.value
    } as any;
    this._assignmentService.save(assignment).subscribe(response => {
      console.log(response);
      this.router.navigate(['/new/assignment']);
    });
  }
}
