import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CrudTableComponent } from '../shared/components/crud-table/crud-table.component';
import { CrudFormComponent } from '../shared/components/crud-form/crud-form.component';
import { StudentsService } from '../shared/students.service';
import { Auteur } from '../assignments-new/auteur.model';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    CrudTableComponent,
    CrudFormComponent,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  student?: Auteur;

  constructor(private service:StudentsService){}
  findAll() {
    this.service.findAll().subscribe(data=>{
      console.log("Find");
      console.log(data);
    });
  }
  save() {
    this.service.save({id:"69",nom:"Tota"} as Auteur).subscribe(data=>{
      console.log("Save");
      console.log(data);
      this.student = data;
    });
  }
  find() {
    this.service.findById("69").subscribe(data=>{
      console.log("FindById");
      console.log(data);
    });
  }
  update() {
    this.service.update("69",{id:"69", nom:"Toto"} as Auteur).subscribe(data=>{
      console.log("Update");
      console.log(data);
    });
  }
  delete() {
    this.service.delete("69").subscribe(data=>{
      console.log("Delete");
      console.log(data);
    })
  }
}
