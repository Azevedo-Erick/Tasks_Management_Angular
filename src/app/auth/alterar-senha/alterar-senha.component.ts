import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alterar-senha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlterarSenhaComponent {

}
