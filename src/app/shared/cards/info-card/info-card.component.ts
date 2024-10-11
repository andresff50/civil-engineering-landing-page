import { Component, input } from '@angular/core';
import { PrimaryButtonComponent } from '../../buttons/primary-button/primary-button.component';
import { IconPosition } from '../../enums/icon-position.enum';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  headerTitle = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  // First Button
  firstBtnIcon = input<string>();
  firstBtnIconPosition = input.required<IconPosition>();
  firstBtnText = input.required<string>();
  // firstBtnLink = input.required<string>();
  // Second Button
  secondBtnIcon = input<string>();
  secondBtnIconPosition = input.required<IconPosition>();
  secondBtnText = input.required<string>();
  // secondBtnLink = input.required<string>();
}
