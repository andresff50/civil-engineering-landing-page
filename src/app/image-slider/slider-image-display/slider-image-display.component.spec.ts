import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageDisplayComponent } from './slider-image-display.component';

describe('SliderImageDisplayComponent', () => {
  let component: SliderImageDisplayComponent;
  let fixture: ComponentFixture<SliderImageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
