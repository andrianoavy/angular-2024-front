export class Assignment {
  _id?: string;
  nom!: string;
  dateLimite!: Date;
  rendu!: boolean;
  matiere!: {
    nom: string;
    illustration?: string;
    responsable: {
      _id?: string;
      nom: string;
      photo?: string;
    };
  };
  auteur!: {
    _id?: string;
    nom: string;
  }
  dateDeRendu?: Date;
  note?: number;
  remarques?: string[];
}
