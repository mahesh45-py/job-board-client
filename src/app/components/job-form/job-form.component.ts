import { Component, effect, EventEmitter, input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatButtonModule, MatInputModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent {
  initalState = input<Job>();

  @Output()
  formValueChanged = new EventEmitter<Job>();

  @Output()
  formSubmitted = new EventEmitter<Job>();

  jobForm = this.formBuilder.group({
    title:['', [Validators.required, Validators.minLength(3)]],
    position:['',[ Validators.required, Validators.minLength(3)]],
    company:['', [Validators.required, Validators.minLength(3)]],
    experience:['', [Validators.required, Validators.minLength(3)]],
    level:['Fresher', [Validators.required, Validators.minLength(3)]],
    description:['', [Validators.required, Validators.minLength(100)]],
    salary:[''],
    
  })


  constructor(private formBuilder:FormBuilder){
    effect(()=>{
      this.jobForm.setValue({
        title: this.initalState()?.title || '',
        position: this.initalState()?.position || '',
        company: this.initalState()?.company || '',
        experience: this.initalState()?.experience || '',
        level: this.initalState()?.level || 'Fresher',
        description: this.initalState()?.description || '',
        salary: this.initalState()?.salary || '',
        
      })
    })
  }

  get title(){
    return this.jobForm.get('title')
  }
  get position(){
    return this.jobForm.get('position')
  }
  get company(){
    return this.jobForm.get('company')
  }
  get experience(){
    return this.jobForm.get('experience')
  }
  get level(){
    return this.jobForm.get('level')
  }
  get description(){
    return this.jobForm.get('description')
  }
  get salary(){
    return this.jobForm.get('salary')
  }

  submitForm(){
    this.formSubmitted.emit(this.jobForm.value as Job);
  }
}
