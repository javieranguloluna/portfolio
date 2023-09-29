import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBannerComponent } from './section-banner.component';

describe('SectionBannerComponent', () => {
  let component: SectionBannerComponent;
  let fixture: ComponentFixture<SectionBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionBannerComponent]
    });
    fixture = TestBed.createComponent(SectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
