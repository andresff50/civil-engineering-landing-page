import { Component } from '@angular/core';
import { InfoCardComponent } from '../shared/cards/info-card/info-card.component';
import { IconPosition } from '../shared/enums/icon-position.enum';
@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
  currentSlide = 0;

  slide1 = {
    image: 'images/slider/business-slider1.jpg',
    headerTitle: 'High Quality Garantied',
    title: 'Building And Constructing Is Our Life Business',
    description: 'With years of immaculate experience in the construction business, we are the client-oriented team looking forward to new breathtaking projects to accomplish!',
    firstBtnIcon: 'fa-solid fa-mobile-screen-button',
    firstBtnIconPosition: IconPosition.Left,
    firstBtnText: 'our services',
    secondBtnIcon: 'fa-solid fa-mobile-screen-button',
    secondBtnIconPosition: IconPosition.Right,
    secondBtnText: 'About us',
    
  };

  // nextSlide() {
  //   this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  // }

  // prevSlide() {
  //   this.currentSlide =
  //     (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  // }
}
