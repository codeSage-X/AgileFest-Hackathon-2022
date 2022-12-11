import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateRegionComponent } from './climate-region.component';

describe('ClimateRegionComponent', () => {
  let component: ClimateRegionComponent;
  let fixture: ComponentFixture<ClimateRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimateRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
