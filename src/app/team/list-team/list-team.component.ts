import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTeamComponent {

}
