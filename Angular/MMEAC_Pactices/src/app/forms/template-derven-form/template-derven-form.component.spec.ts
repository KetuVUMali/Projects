import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDervenFormComponent } from './template-derven-form.component';

describe('TemplateDervenFormComponent', () => {
  let component: TemplateDervenFormComponent;
  let fixture: ComponentFixture<TemplateDervenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDervenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDervenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
