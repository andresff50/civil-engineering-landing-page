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
  currentImageIndex = 0;

  images: string[] = [
    'images/slider/business-slider1.jpg',
    'images/slider/business-slider2.jpg',
    'images/slider/business-slider3.jpg'
  ];

  // slide = {
  //   image: 'images/slider/business-slider1.jpg',
  //   headerTitle: 'High Quality Garantied',
  //   title: 'Building And Constructing Is Our Life Business',
  //   description: 'With years of immaculate experience in the construction business, we are the client-oriented team looking forward to new breathtaking projects to accomplish!',
  //   firstBtnIcon: 'fa-solid fa-angle-right',
  //   firstBtnIconPosition: IconPosition.Right,
  //   firstBtnText: 'our services',
  //   secondBtnIcon: 'fa-solid fa-angle-right',
  //   secondBtnIconPosition: IconPosition.Right,
  //   secondBtnText: 'About us',
    
  // };

  prevImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.images.length - 1 
      : this.currentImageIndex - 1;
  }

  nextImage(): void {
    this.currentImageIndex = this.currentImageIndex === this.images.length - 1 
      ? 0 
      : this.currentImageIndex + 1;
  }

  setImage(index: number): void {
    this.currentImageIndex = index;
  }
}
