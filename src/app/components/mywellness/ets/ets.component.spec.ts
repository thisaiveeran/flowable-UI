import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtsComponent } from './ets.component';

describe('EtsComponent', () => {
  let component: EtsComponent;
  let fixture: ComponentFixture<EtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
