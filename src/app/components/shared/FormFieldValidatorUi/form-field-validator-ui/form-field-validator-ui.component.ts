import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-validator-ui',
  templateUrl: './form-field-validator-ui.component.html',
  styleUrls: ['./form-field-validator-ui.component.scss']
})
export class FormFieldValidatorUiComponent implements OnInit {

  @Input()
  myFormControl: FormControl = null;

  @Input()
  myFormControlName: string = "value";


  constructor() { }

  ngOnInit() {
  }
  getRequiredMsg(): string {
    return this.myFormControlName + " is required.";
  }
  getMinLenMsg(): string {
    const validatorData = this.myFormControl.getError("minlength");
    return this.myFormControlName + " must be at least " + validatorData.requiredLength + " characters long.";
  }
  getMaxLenMsg(): string {
    const validatorData = this.myFormControl.getError("maxlength");
    return this.myFormControlName + " must be less than " + validatorData.requiredLength + " characters long.";
  }
  getMinMsg(): string {
    const validatorData = this.myFormControl.getError("min");
    return this.myFormControlName + " must be less than " + validatorData.requiredLength + " ";
  }

  getMaxMsg(): string {
    const validatorData = this.myFormControl.getError("max");
    return this.myFormControlName + " must be less than " + validatorData.requiredLength + " .";
  }

  getPatternMsg(): string {
    return "Invalid value for " + this.myFormControlName + ".";
  }
  getForbidnMsg(): string {
    return "forbiddenName ";
  }
  getNotInListMsg(): string {
    return "Invalid Input for " + this.myFormControlName + ".";
  }

}
