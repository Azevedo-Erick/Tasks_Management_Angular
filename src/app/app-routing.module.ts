import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRoutingModule } from './task/task-routing.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => TaskRoutingModule
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TaskRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
