import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css'
})
export class BaseButtonComponent {
  // default: undefined
  icon = input<string>();
  displaytext = input.required<string>();
}
