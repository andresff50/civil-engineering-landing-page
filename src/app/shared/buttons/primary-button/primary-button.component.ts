import { Component, input } from '@angular/core';
import { IconPosition } from '../../enums/icon-position.enum';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  icon = input<string>();
  text = input.required<string>();
  iconPosition = input.required<IconPosition>();
}
