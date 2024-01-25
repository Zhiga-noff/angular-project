import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamycComponent } from './dinamyc.component';

describe('DinamycComponent', () => {
  let component: DinamycComponent;
  let fixture: ComponentFixture<DinamycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamycComponent]
    });
    fixture = TestBed.createComponent(DinamycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
