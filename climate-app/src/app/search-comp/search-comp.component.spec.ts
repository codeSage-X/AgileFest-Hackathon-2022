import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompComponent } from './search-comp.component';

describe('SearchCompComponent', () => {
  let component: SearchCompComponent;
  let fixture: ComponentFixture<SearchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
