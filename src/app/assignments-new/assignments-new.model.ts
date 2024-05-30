import { Auteur } from "./auteur.model";
import { Matiere } from "./matiere.model";

export class Assignment {
  _id?: string;
  nom!: string;
  dateLimite!: Date;
  matiere?: Matiere;
  rendus?: Auteur[]
  nonRendus?: Auteur[]
  dateDeRendu?: Date;
  note?: number;
  remarques?: string[];
  groups?: string[];
}
