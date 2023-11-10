import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTagComponent {

}
