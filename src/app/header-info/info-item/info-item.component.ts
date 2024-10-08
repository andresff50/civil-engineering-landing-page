import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css',
})
export class InfoItemComponent {
  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
