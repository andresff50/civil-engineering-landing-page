import { Component } from '@angular/core';
import { IconPosition } from '../shared/enums/icon-position.enum';
import { SliderControlsComponent } from './slider-controls/slider-controls.component';
import { SliderImageDisplayComponent } from './slider-image-display/slider-image-display.component';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [
    SliderControlsComponent,
    SliderImageDisplayComponent,
  ],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
  currentImageIndex = 0;

  slides = [
    {
      image: 'images/slider/business-slider1.jpg',
      headerTitle: 'title1',
      cardType: 'card1',
    },
    {
      image: 'images/slider/business-slider2.jpg',
      headerTitle: 'title2',
      cardType: 'card2',
    },
    {
      image: 'images/slider/business-slider3.jpg',
      headerTitle: 'title3',
      cardType: 'card3',
    },
  ];

  prevImage(): void {
    this.currentImageIndex =
      this.currentImageIndex === 0
        ? this.slides.length - 1
        : this.currentImageIndex - 1;
  }

  nextImage(): void {
    this.currentImageIndex =
      this.currentImageIndex === this.slides.length - 1
        ? 0
        : this.currentImageIndex + 1;
  }

  setImage(index: number): void {
    this.currentImageIndex = index;
  }

  get currentSlide() {
    return this.slides[this.currentImageIndex];
  }
}
