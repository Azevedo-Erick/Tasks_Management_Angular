import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRoutingModule } from './task/task-routing.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    loadChildren: () => TaskRoutingModule
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: () => AuthRoutingModule
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TaskRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
