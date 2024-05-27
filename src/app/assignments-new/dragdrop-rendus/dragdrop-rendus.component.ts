import { Component, Input } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Auteur } from '../auteur.model';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-dragdrop-rendus',
  templateUrl: './dragdrop-rendus.component.html',
  styleUrl: './dragdrop-rendus.component.css',
  standalone: true,
  imports: [DatePipe, CdkDrag, CdkDropList, MatListModule]
})
export class DragdropRendusComponent {
  @Input()
  assignmentId:string = '';
  @Input()
  rendus:Auteur[] = [];
  @Input()
  nonRendus:Auteur[] = [];

  constructor(private service:AssignmentsService) {}

  drop(event: CdkDragDrop<Auteur[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.previousContainer.data === this.rendus){
        //mettre le devoir a non rendus => supprimer les notes et remarques et dateRendu
      }
      else{
        //mettre le devoir en rendus => entrer notes date et remarques dans le formulaire
      }
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
  }
}
