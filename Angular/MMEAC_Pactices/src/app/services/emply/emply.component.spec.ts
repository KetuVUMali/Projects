import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyComponent } from './emply.component';

describe('EmplyComponent', () => {
  let component: EmplyComponent;
  let fixture: ComponentFixture<EmplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
