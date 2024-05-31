import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatieresService } from '../shared/matieres.service';
import { Matiere } from '../assignments-new/matiere.model';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-matieres',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './matieres.component.html',
  styleUrl: './matieres.component.css'
})
export class MatieresComponent implements OnInit, AfterViewInit {
  matiere: Matiere = { _id: '', nom: '', responsable: '' };
  displayedColumns: string[] = ['id', 'nom', 'responsable', 'actions']
  dataSource!: Matiere[];
  filterControl = new FormControl('');

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalDocs!: number;

  constructor(private service: MatieresService) { }

  ngOnInit(): void {
  }

  fetchData(): void {
    this.service.findAll(this.filterControl.value??'', this.paginator.pageIndex, this.paginator.pageSize).subscribe(response => {
      this.dataSource = response.docs;
      this.totalDocs = response.totalDocs;
      this.closeReset();
    });
  }

  resetTable(): void {
    this.filterControl.setValue('');
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0
    this.paginator.pageSize = 10
    this.fetchData();
    this.filterControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(
      (value) => {
        if (value && value.length > 2) {
          this.fetchData()
        }
      }
    );
    this.drawer.closedStart.subscribe(() => {
      this.resetForm();
    })
  }

  resetForm() {
    this.matiere = { _id: '', nom: '', responsable: '' };
  }

  closeReset() {
    this.resetForm();
    this.drawer.close();
  }

  newEntry() {
    this.resetForm();
    this.drawer.open();
  }

  delete(id: any) {
    this.service.delete(id).subscribe(data => {
      console.log("Find");
      console.log(data);
      this.fetchData();
    });
  }

  findAll() {
    this.service.findAll().subscribe(data => {
      console.log("Find");
      console.log(data);
    });
  }

  save() {
    this.service.save(this.matiere).subscribe(data => {
      console.log("Save");
      console.log(data);
      this.matiere = data;
      this.fetchData();
    });
  }

  showUpdateForm(id: any) {
    const entry = this.dataSource.find(s => s._id == id) ?? this.matiere;
    this.matiere = { ...entry };
    this.drawer.open();
  }

  update() {
    this.service.update(this.matiere).subscribe(data => {
      console.log("Update");
      console.log(data);
      this.fetchData();
    });
  }

  // Pour le composant angular material paginator
  handlePageEvent(event: PageEvent) {
    this.fetchData();
  }
}
