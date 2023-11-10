import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTeamComponent {

}
