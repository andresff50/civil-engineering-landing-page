import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarInfoComponent } from './top-bar-info.component';

describe('TopBarInfoComponent', () => {
  let component: TopBarInfoComponent;
  let fixture: ComponentFixture<TopBarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
