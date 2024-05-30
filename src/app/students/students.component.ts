import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { StudentsService } from '../shared/students.service';
import { Auteur } from '../assignments-new/auteur.model';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit, AfterViewInit {
  student: Auteur = { id: '', nom: '', group: '' };
  displayedColumns: string[] = ['_id', 'nom', 'group', 'actions']
  dataSource!: Auteur[];

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.findAll().subscribe(response => {
      this.dataSource = response.docs;
      this.closeReset();
    });
  }

  ngAfterViewInit(): void {
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
    this.student = {...entry};
    this.drawer.open();
  }

  update() {
    this.service.update(this.student).subscribe(data => {
      console.log("Update");
      console.log(data);
      this.fetchData();
    });
  }

}
