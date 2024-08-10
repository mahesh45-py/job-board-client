import { Component, OnInit, WritableSignal } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [JobFormComponent, MatCardModule],
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})
export class EditJobComponent implements OnInit {
  job = {} as WritableSignal<Job>;

  constructor(private router:Router, private route: ActivatedRoute, private jobService:JobService){
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if(!id){
      alert("No Id provided!")
    }

    this.jobService.getJob(id!)
    this.job = this.jobService.job$;
  }

  editJob(job:Job){
    this.jobService.updateJob(this.job()._id || "",job)
        .subscribe({
          next: () =>{
            this.router.navigate(['/'])
          },
          error:(err) => {
            alert('Failed to update Job');
            console.error(err)
          }
        })
  }
}
