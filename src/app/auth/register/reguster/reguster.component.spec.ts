import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusterComponent } from './reguster.component';

describe('RegusterComponent', () => {
  let component: RegusterComponent;
  let fixture: ComponentFixture<RegusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegusterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
