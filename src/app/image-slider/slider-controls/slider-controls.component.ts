import { Component, output } from '@angular/core';

@Component({
  selector: 'app-slider-controls',
  standalone: true,
  imports: [],
  templateUrl: './slider-controls.component.html',
  styleUrl: './slider-controls.component.css',
})
export class SliderControlsComponent {
  previous = output<void>();
  next = output<void>();

  onPrevious(): void {
    this.previous.emit();
  }

  onNext(): void {
    this.next.emit();
  }
}
