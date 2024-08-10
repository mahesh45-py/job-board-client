import { Component, OnInit, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';
@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit {

  jobs$ = {} as WritableSignal<Job[]>;

  displayedColumns:string[] = [
    'col-title',
    'col-position',
    'col-company',
    'col-level',
    'col-experience',
    'col-action'
  ]

  constructor(private jobsService:JobService){

  }


  ngOnInit(): void {
    this.fetchJobs()
  }

  fetchJobs(){
    this.jobs$ = this.jobsService.jobs$;
    this.jobsService.getJobs()
  }

  deleteJob(id:string){
    this.jobsService.deleteJob(id).subscribe({next: () => this.fetchJobs(),})
  }
}
