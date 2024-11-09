import { Component, input } from '@angular/core';

@Component({
  selector: 'app-slider-image-display',
  standalone: true,
  imports: [],
  templateUrl: './slider-image-display.component.html',
  styleUrl: './slider-image-display.component.css',
})
export class SliderImageDisplayComponent {
  imageUrl = input<string>();
}
