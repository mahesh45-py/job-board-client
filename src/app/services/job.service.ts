import { Injectable, signal } from '@angular/core';
import { Job } from '../models/job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  // private url = 'http://localhost:5200' //local
  private url = 'https://job-board-server-one.vercel.app' //prod
  jobs$ = signal<Job[]>([]);
  job$ = signal<Job>({} as Job);

  constructor(private http:HttpClient) { }

  private refreshJobs(){
    this.http.get<Job[]>(`${this.url}/jobs`).subscribe((jobs)=>{
      this.jobs$.set(jobs);
    })
  }

  getJobs(){
    this.refreshJobs();
    return this.jobs$();
  }

  getJob(id:string){
    this.http.get<Job>(`${this.url}/jobs/${id}`).subscribe((job)=>{
      this.job$.set(job);
      return this.job$();
    })
  }
  createJob(job:Job){
    return this.http.post(`${this.url}/jobs`,job,{responseType:'text'})
  }

  updateJob(id:string,job:Job){
    return this.http.put(`${this.url}/jobs/${id}`,job,{responseType:'text'})
  }

  deleteJob(id:string){
    return this.http.delete(`${this.url}/jobs/${id}`,{responseType:'text'})
  }
}
