import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardFeaturePrimaryComponent } from './info-card-feature-primary.component';

describe('InfoCardFeaturePrimaryComponent', () => {
  let component: InfoCardFeaturePrimaryComponent;
  let fixture: ComponentFixture<InfoCardFeaturePrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardFeaturePrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardFeaturePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
