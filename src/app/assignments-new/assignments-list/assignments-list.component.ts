import { AfterViewInit, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { AssignmentsNewService } from '../../shared/assignments-new.service';
import { Assignment } from '../assignments-new.model';
import { AssignmentsListItemComponent } from '../assignments-list-item/assignments-list-item.component';
import { MatList, MatListItem } from '@angular/material/list';
import { ROLE } from '../../shared/role.enum';
import { AssignmentsListItemStudentComponent } from '../assignments-list-item-student/assignments-list-item-student.component';
import { AutorizationService } from '../../autorization.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { filter, map, pairwise, throttleTime } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-assignments-list',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    ScrollingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AssignmentsListItemStudentComponent,
    AssignmentsListItemComponent,
    MatList,
    MatListItem,
    CdkVirtualScrollViewport,
    MatIconModule
  ],
  templateUrl: './assignments-list.component.html',
  styleUrl: './assignments-list.component.css'
})
export class AssignmentsListComponent implements OnInit, AfterViewInit {

  isStudent!: boolean;
  assignments?: Assignment[] = [];
  itemSize: number = 5;
  pageIndex: number = 0;
  totalDocs!: number;
  search = new FormControl('');
  @ViewChild(CdkVirtualScrollViewport) scroller!: CdkVirtualScrollViewport;
  nextPage?: number;
  hasNextPage?: boolean;

  constructor(private autorization: AutorizationService, private service: AssignmentsNewService, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.isStudent = this.autorization.isStudent();
    this.fetchData();
  }

  ngAfterViewInit(): void {
    this.search.valueChanges.pipe(throttleTime(300)).subscribe(()=> this.fetchData());
    this.scroller.elementScrolled().pipe(
      map(() => this.scroller.measureScrollOffset("bottom")),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1) && (y2 < 100)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        this.fetchMore();
      });
    })
  }

  resetFilter() {
    this.search.setValue('');
  }

  fetchMore() {
    switch (this.autorization.getRole()) {
      case ROLE.Student:
        this.service.getAssignmentsStudents(testStudent2).subscribe((response) => {
          this.totalDocs = response.totalDocs;
          this.nextPage = response.nextPage;
          this.hasNextPage = response.hasNextPage;
          if(!this.hasNextPage) {
            return;
          }
          this.assignments = [...this.assignments!, ...response.docs as any];
        });
        break;
      default:
        this.service.findAll(this.search.value??undefined, this.pageIndex, this.itemSize).subscribe((response) => {
          this.totalDocs = response.totalDocs;
          this.nextPage = response.nextPage;
          this.hasNextPage = response.hasNextPage;
          this.pageIndex = this.nextPage!;
          if(!this.hasNextPage) {
            return;
          }
          this.assignments = [...this.assignments!, ...response.docs as any];
        });
        break;
    }
  }

  fetchData() {
    switch (this.autorization.getRole()) {
      case ROLE.Student:
        this.service.getAssignmentsStudents(testStudent2).subscribe((response) => {
          this.assignments = response.docs as any;
          this.totalDocs = response.totalDocs;
          this.nextPage = response.nextPage;
          this.pageIndex = this.nextPage!;
          this.hasNextPage = response.hasNextPage;

        });
        break;
      default:
        this.service.findAll(this.search.value??undefined, this.pageIndex, this.itemSize).subscribe((response) => {
          this.totalDocs = response.totalDocs;
          this.nextPage = response.nextPage;
          this.hasNextPage = response.hasNextPage;
          this.pageIndex = this.nextPage!;
          this.assignments = response.docs as any;
        });
        break;
    }
  }

}


const testStudent1 = '6658621178b457da0f9fb143'; // a des devoirs
const testStudent2 = '6658765957d710f5ab626638'; // n'a pas de devoirs
