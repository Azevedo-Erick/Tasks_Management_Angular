import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {

}
