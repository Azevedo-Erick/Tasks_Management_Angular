import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../models/task.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DefaultResponse } from '../../models/defaultResponse.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public httpClient = inject(HttpClient);
  protected userUrl = `${environment.api}task`;


  getAll() {
    return this.httpClient.get<Task[]>(this.userUrl);
  }

  getById(id: number) {
    return this.httpClient.get<Task>(this.userUrl + `/${id}`);

  }

  create(data: Task) {
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    return this.httpClient.post(this.userUrl, data, { headers: header });
  }

  update(data: Task, id: number) {
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    return this.httpClient.patch(this.userUrl + `/${id}`, data, { headers: header });
  }


  delete(id: number) {
    return this.httpClient.delete(this.userUrl + `/${id}`).subscribe(x => this.getAll());
  }
}
