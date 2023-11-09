import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormTaskComponent } from './components/form-task/form-task.component';

const routes: Routes = [
  {
    path: "task",
    children: [
      {
        path: "list",
        component: ListTaskComponent
      },
      {
        path: "form/:id",
        component: FormTaskComponent,
      },
      {
        path: "form",
        component: FormTaskComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
