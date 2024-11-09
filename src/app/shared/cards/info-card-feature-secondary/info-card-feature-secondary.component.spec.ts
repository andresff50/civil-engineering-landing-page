import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardFeatureSecondaryComponent } from './info-card-feature-secondary.component';

describe('InfoCardFeatureSecondaryComponent', () => {
  let component: InfoCardFeatureSecondaryComponent;
  let fixture: ComponentFixture<InfoCardFeatureSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardFeatureSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardFeatureSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
