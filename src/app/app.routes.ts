import { Routes } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';

export const routes: Routes = [{
    path: '',
    component: JobsListComponent,
    title: 'Jobs List'
},
{
    path: 'new',
    component: AddJobComponent
},
{
    path: 'edit/:id',
    component: EditJobComponent
}

];
