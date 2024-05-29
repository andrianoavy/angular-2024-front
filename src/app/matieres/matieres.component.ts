import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatieresService } from '../shared/matieres.service';
import { Matiere } from '../assignments-new/matiere.model';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  templateUrl: './matieres.component.html',
  styleUrl: './matieres.component.css'
})
export class MatieresComponent implements OnInit, AfterViewInit {
  matiere: Matiere = { id: '', nom: '', responsable: '' };
  displayedColumns: string[] = ['id', 'nom', 'responsable', 'actions']
  dataSource!: Matiere[];

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private service: MatieresService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.findAll().subscribe(data => {
      this.dataSource = data;
      this.closeReset();
    });
  }

  ngAfterViewInit(): void {
    this.drawer.closedStart.subscribe(() => {
      this.resetForm();
    })
  }

  resetForm() {
    this.matiere = { id: '', nom: '', responsable: '' };
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
    //valeur de test
    this.matiere.id = "" + Math.random() * 100;
    this.service.save(this.matiere).subscribe(data => {
      console.log("Save");
      console.log(data);
      this.matiere = data;
      this.fetchData();
    });
  }

  showUpdateForm(id: any) {
    const entry = this.dataSource.find(s => s.id == id) ?? this.matiere;
    this.matiere = {...entry};
    this.drawer.open();
  }

  update() {
    this.service.update(this.matiere.id, this.matiere).subscribe(data => {
      console.log("Update");
      console.log(data);
      this.fetchData();
    });
  }

}
