import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentDataComponent } from './child-to-parent-data.component';

describe('ChildToParentDataComponent', () => {
  let component: ChildToParentDataComponent;
  let fixture: ComponentFixture<ChildToParentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildToParentDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildToParentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
