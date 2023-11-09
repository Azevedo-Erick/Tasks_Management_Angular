import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { ToastModel, ToastService } from 'src/app/shared/components/toast.service';
import { ToastType } from 'src/app/shared/components/toast/enum/toast-type.enum';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/models/task.model';
import { TaskService } from '../../task.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, ToastComponent],
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTaskComponent implements OnInit {


  protected toastService: ToastService = inject(ToastService);
  protected taskService: TaskService = inject(TaskService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private formBuilderService = inject(FormBuilder);

  protected form = this.formBuilderService.group({
    name: ["", [Validators.required]],
    description: '',
    startDate: [''],
    deadLine: [''],
    priority: [0],
    status: [0]
  })

  ngOnInit(): void {



    this.route.params.subscribe(params => {
      if (params['id']) {
        this.taskService.getById(parseInt(params['id'])).subscribe(x => {

          const startDate = new Date(x.startDate);
          const deadLine = new Date(x.deadLine);
          this.form.setValue({
            name: x.name,
            description: x.description,
            startDate: `${startDate.getFullYear()}-${startDate.getMonth()}-0${startDate.getDate().toString().slice(-2)}`,
            deadLine: `${deadLine.getFullYear()}-${deadLine.getMonth()}-0${deadLine.getDate().toString().slice(-2)}`,
            priority: x.priority,
            status: x.status
          })
        }

        );

        //this.form.controls.name.setValue("a");
      }
    });
  }

  submit() {
    if (!this.form.valid) {
      this.toastService.showToast(new ToastModel("Há dados inválidos no formuário", ToastType.error), 3000);
      return;
    }
    const task = {
      deadLine: new Date(this.form.value.deadLine!),
      name: this.form.value.name,
      status: this.form.value.status,
      startDate: new Date(this.form.value.startDate!),
      description: this.form.value.description,
      priority: this.form.value.priority,

    } as Task;

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.taskService.update(task, parseInt(params['id'])).subscribe(x => {
          this.toastService.showToast(new ToastModel("Atualizado com sucesso!", ToastType.success), 3000);
        });
        return
      }
      this.taskService.create(task).subscribe(x => {
        this.toastService.showToast(new ToastModel("Cadastrado com sucesso!", ToastType.success), 3000);
      });
    })


  }
}
