import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywellnessComponent } from './mywellness.component';

describe('MywellnessComponent', () => {
  let component: MywellnessComponent;
  let fixture: ComponentFixture<MywellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywellnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
