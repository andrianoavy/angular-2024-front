import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Auteur } from '../auteur.model';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';
import { AssignmentsNewService } from '../../shared/assignments-new.service';
import { Dialog } from '@angular/cdk/dialog';
import { DialogData, RenduDialogComponent } from '../rendu-dialog/rendu-dialog.component';
import { AnnulerRenduDialogComponent } from '../annuler-rendu-dialog/annuler-rendu-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { RemarquesDialogComponent } from '../remarques-dialog/remarques-dialog.component';

@Component({
  selector: 'app-dragdrop-rendus',
  templateUrl: './dragdrop-rendus.component.html',
  styleUrl: './dragdrop-rendus.component.css',
  standalone: true,
  imports: [MatButtonModule, DatePipe, CdkDrag, CdkDropList, MatListModule]
})
export class DragdropRendusComponent {
  @Input()
  assignmentId: string = '';
  @Input()
  rendus: Auteur[] = [];
  @Input()
  nonRendus: Auteur[] = [];

  constructor(public dialog: Dialog, private service: AssignmentsNewService) { }

  drop(event: CdkDragDrop<Auteur[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let current = event.previousContainer.data[event.previousIndex];
      if (event.previousContainer.data === this.rendus) {
        //mettre le devoir a non rendus => supprimer les notes et remarques et dateRendu
        this.openAnnulerRenduDialog(current, () => {
          this.service.annulerRendu(this.assignmentId, current);
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
        });
      }
      else {
        //mettre le devoir en rendus => entrer notes date et remarques dans le formulaire
        this.openRenduDialog(current, () => {
          this.service.rendreAssignment(this.assignmentId, current);
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
        });
      }
    }
  }

  openAnnulerRenduDialog(current: Auteur, doOnClosed: () => void) {
    const dialogRef = this.dialog.open<DialogData>(AnnulerRenduDialogComponent, {
      data: true,
    });

    dialogRef.closed.subscribe(result => {
      if (result) {
        doOnClosed();
      }
    });
  }

  openRenduDialog(auteur: Auteur, doOnClosed: () => void): void {
    const dialogRef = this.dialog.open<DialogData>(RenduDialogComponent, {
      data: { note: auteur.note, date: auteur.dateDeRendu, remarques: auteur.remarques },
      minWidth:'250px'
    });

    dialogRef.closed.subscribe(result => {
      if (result && (result.note || result.note === 0)) {
        auteur.note = result.note;
        auteur.dateDeRendu = result.date;
        if (!Array.isArray(auteur.remarques)) {
          auteur.remarques = result.remarques?.split('\n');
        }
        doOnClosed();
      }
    });
  }

  toggleRemarques(remarques: string[]) {
    this.dialog.open<string[]>(RemarquesDialogComponent, {data:remarques, minWidth:'250px', maxWidth:'80vw'});
  }
}
