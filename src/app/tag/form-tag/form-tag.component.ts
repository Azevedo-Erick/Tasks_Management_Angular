import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-tag.component.html',
  styleUrls: ['./form-tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTagComponent {

}
