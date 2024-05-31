import { Injectable } from '@angular/core';
import { ROLE } from './shared/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {
  private role!:ROLE;

  constructor() {
  }

  setRole(role:ROLE) {
    this.role = role;
  }

  getRole(){
    return this.role;
  }

  assignRole(id: string | null) {
    switch (id) {
      case "student":
        this.setRole(ROLE.Student);
        break;
      case "prof":
        this.setRole(ROLE.Prof);
        break;
      default:
        this.setRole(ROLE.Admin);
        break;
    }
  }

  isStudent(): boolean {
    return this.role === ROLE.Student;
  }
  isProf(): boolean {
    return this.role === ROLE.Prof;
  }
  isAdmin(): boolean {
    return this.role === ROLE.Admin;
  }

  idStudent() {
      return testId1;
  }

}
const testId1 = '6658765957d710f5ab626638'; // a des devoirs
const testStudent1 = '6658621178b457da0f9fb143'; // a des devoirs
const testStudent2 = '6658765957d710f5ab626638'; // n'a pas de devoirs

