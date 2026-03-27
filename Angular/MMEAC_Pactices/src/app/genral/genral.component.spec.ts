import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralComponent } from './genral.component';

describe('GenralComponent', () => {
  let component: GenralComponent;
  let fixture: ComponentFixture<GenralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
