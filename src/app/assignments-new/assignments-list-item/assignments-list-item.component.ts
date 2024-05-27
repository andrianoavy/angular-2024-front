import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignments-new.model';
import {  MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AutorizationService } from '../../autorization.service';
import { DragdropRendusComponent } from '../dragdrop-rendus/dragdrop-rendus.component';

@Component({
  selector: 'app-assignments-list-item',
  standalone: true,
  imports: [DragdropRendusComponent, MatCardModule, MatButton, DatePipe, MatListModule, MatDividerModule ],
  templateUrl: './assignments-list-item.component.html',
  styleUrl: './assignments-list-item.component.css'
})
export class AssignmentsListItemComponent implements OnInit{

  isAdmin!:boolean;
  showDetails: boolean = false;
  @Input() assignment!: Assignment;
  constructor(private autorization:AutorizationService){}

  ngOnInit(): void {
    this.isAdmin = this.autorization.isAdmin();
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
