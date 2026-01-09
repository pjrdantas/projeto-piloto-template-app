import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
opened = signal(false);

  constructor(private router: Router) {}

  toggleMenu() {
    this.opened.update(v => !v);
  }

  goHome() {
    this.router.navigate(['']);
    this.opened.set(false);
  }

  openMicrofrontend() {
    this.router.navigate(['/microfrontend']);
    this.opened.set(false);
  }
}
