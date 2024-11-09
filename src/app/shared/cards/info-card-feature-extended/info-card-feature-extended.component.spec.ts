import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardFeatureExtendedComponent } from './info-card-feature-extended.component';

describe('InfoCardFeatureExtendedComponent', () => {
  let component: InfoCardFeatureExtendedComponent;
  let fixture: ComponentFixture<InfoCardFeatureExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardFeatureExtendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardFeatureExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
