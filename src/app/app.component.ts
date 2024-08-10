import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobsListComponent, MatToolbarModule],
  template: `
    <mat-toolbar>
      <span> Job Management System</span>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
    
  `,
  styles: [
    `
    main{
      display:flex;
      justify-content:center;
      padding: 2rem 4rem;
    }
    `
  ],
})
export class AppComponent {
  title = 'client';
}
