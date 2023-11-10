import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task.model';
import { TaskService } from '../../task.service';
import { DefaultResponse } from 'src/models/defaultResponse.model';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TaskGrouped } from 'src/models/task-grouped.model';
@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent implements OnInit {

  protected tasks$ = new Observable<TaskGrouped[]>();

  protected taskService = inject(TaskService);
  protected router = inject(Router);
  ngOnInit(): void {
    this.tasks$ = this.taskService.getAll();
    this.tasks$.subscribe(x => console.log(x))
  }
  protected editar(id?: number) {

    this.router.navigate([`/task/form/${id}`])
    console.log(id)
  }

  protected delete(id: number) {
    this.taskService.delete(id);
    console.log(id)
  }
}
