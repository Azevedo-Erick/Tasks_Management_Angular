import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esqueci-a-senha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esqueci-a-senha.component.html',
  styleUrls: ['./esqueci-a-senha.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EsqueciASenhaComponent {

}
