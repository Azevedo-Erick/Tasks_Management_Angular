import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModel, ToastService } from '../toast.service';
import { Observable } from 'rxjs';
import { ToastType } from './enum/toast-type.enum';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {

  protected data: Observable<ToastModel[]> = new Observable<ToastModel[]>();


  @Input('timeInMsToHide') timeInMsToHide: number = 3000;

  protected toastService: ToastService = inject(ToastService);



  ngOnInit(): void {
    this.data = this.toastService.getToastData();

    /*  .subscribe((isVisible) => {
 
       this.showingToast = isVisible;
     }); */

    // this.toastService.getToastMessage().subscribe((message) => {
    //   this.message = message;
    // });
  }
}
