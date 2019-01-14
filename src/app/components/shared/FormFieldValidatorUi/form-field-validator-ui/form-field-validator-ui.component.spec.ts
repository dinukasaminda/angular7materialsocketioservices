import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldValidatorUiComponent } from './form-field-validator-ui.component';

describe('FormFieldValidatorUiComponent', () => {
  let component: FormFieldValidatorUiComponent;
  let fixture: ComponentFixture<FormFieldValidatorUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldValidatorUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldValidatorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
