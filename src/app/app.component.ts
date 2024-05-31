import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from './shared/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { filter } from 'rxjs';
import { AutorizationService } from './autorization.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatDividerModule,
    MatIconModule, MatSlideToggleModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatListModule, LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Application de gestion des assignments';
  isAdmin!: boolean
  isProf!: boolean


  @ViewChild(MatDrawer) drawer?: MatDrawer;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }
    ngOnInit(): void {
      this.isAdmin = this.authService.getRole() === 'admin'
      this.isProf = this.authService.getRole() === 'prof'
    }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getUser() {
    return this.authService.getUser();
  }

  logout(){
    this.authService.logout();
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => this.drawer?.close())
  }

}
