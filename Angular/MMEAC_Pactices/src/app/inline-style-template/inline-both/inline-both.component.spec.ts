import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBothComponent } from './inline-both.component';

describe('InlineBothComponent', () => {
  let component: InlineBothComponent;
  let fixture: ComponentFixture<InlineBothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineBothComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
