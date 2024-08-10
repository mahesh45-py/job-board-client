import { Component } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';
import { MatCardModule } from '@angular/material/card';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  standalone: true,
  imports: [JobFormComponent, MatCardModule],
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {

  constructor(private jobService:JobService, private router:Router){

  }

  addJob(job:Job){
    this.jobService.createJob(job).subscribe({
      next:() => {
        this.router.navigate(['/'])
      },
      error:(err) =>{
        alert('Failed to create Job');
        console.error(err)
      }
    });
    this.jobService.getJobs();
  }
}
