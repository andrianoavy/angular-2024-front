export class Assignment {
  _id?: string;
  nom!: string;
  dateLimite!: Date;
  rendu!: boolean;
  matiere?: {
    nom: string;
    illustration?: string;
    responsable: {
      _id?: string;
      nom: string;
      photo?: string;
    };
  };
  auteurs?: [
    {
      _id?: string;
      nom: string;
      dateDeRendu?: Date;
      note?: number;
      remarques?: string[];
    }
  ]
  dateDeRendu?: Date;
  note?: number;
  remarques?: string[];
}
