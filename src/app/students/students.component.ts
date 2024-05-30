import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { StudentsService } from '../shared/students.service';
import { Auteur } from '../assignments-new/auteur.model';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
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
    MatPaginatorModule,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit, AfterViewInit {
  student: Auteur = { id: '', nom: '', group: '' };
  displayedColumns: string[] = ['_id', 'nom', 'group', 'actions']
  dataSource!: Auteur[];
  filterControl = new FormControl('');

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalDocs!: number;
  totalPages!: number;
  nextPage!: number;
  prevPage!: number;
  hasNextPage!: boolean;
  hasPrevPage!: boolean;

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
  }

  fetchData(): void {
    this.service.findAll(this.filterControl.value??'', this.paginator.pageIndex, this.paginator.pageSize).subscribe(response => {
      this.setDataFromResponse(response);
      this.closeReset();
    });
  }

  resetTable(): void {
    this.fetchData();
    this.filterControl.setValue('');
  }

  setDataFromResponse(response:any) {
    this.dataSource = response.docs;
    this.totalDocs = response.totalDocs;
    this.totalPages = response.totalPages;
    this.nextPage = response.nextPage;
    this.prevPage = response.prevPage;
    this.hasNextPage = response.hasNextPage;
    this.hasPrevPage = response.hasPrevPage;
  }

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0
    this.paginator.pageSize = 0
    this.fetchData();
    this.filterControl.valueChanges.subscribe(value => {
      if (value && value.length > 1)
        this.fetchData();
    });
    this.drawer.closedStart.subscribe(() => {
      this.resetForm();
    })
  }

  resetForm() {
    this.student = { id: '', nom: '', group: '' };
  }

  closeReset() {
    this.resetForm();
    this.drawer.close();
  }

  newEntry() {
    this.resetForm();
    this.drawer.toggle();
  }

  delete(id: any) {
    this.service.delete(id).subscribe(data => {
      console.log("Find");
      console.log(data);
      this.fetchData();
    });
  }

  save() {
    this.service.save(this.student).subscribe(data => {
      console.log("Save");
      console.log(data);
      this.fetchData();
    });
  }

  showUpdateForm(_id: any) {
    const entry = this.dataSource.find(s => s._id == _id) ?? this.student;
    this.student = { ...entry };
    this.drawer.open();
  }

  update() {
    this.service.update(this.student).subscribe(data => {
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
