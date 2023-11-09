import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastType } from './toast/enum/toast-type.enum';

export class ToastModel {

  constructor(public message: string,
    public toastType: ToastType,
    public showingToast: Observable<boolean> = new Observable<boolean>()) {

  }

}


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastData: BehaviorSubject<ToastModel[]> = new BehaviorSubject<ToastModel[]>([] as ToastModel[]);

  showToast(data: ToastModel, duration: number) {
    console.log(this.toastData.value)
    const currentToasts = this.toastData.value;
    currentToasts.push(data);

    this.toastData.next(currentToasts);

    setTimeout(() => {
      const indexToRemove = currentToasts.indexOf(data);
      currentToasts.splice(indexToRemove, 1);
      this.toastData.next(currentToasts);
    }, duration);
  }

  getToastData(): Observable<ToastModel[]> {
    return this.toastData.asObservable();
  }

}
