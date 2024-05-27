import { Injectable } from '@angular/core';
import { ROLE } from './shared/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {
  private role!:ROLE;

  constructor() { }

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

}
