import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
  //decimal驗證
  static decimalValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const regex = /^(\d+)?(\.\d*)?$/;
    return regex.test(value) ? null : { decimalInvalid: true };
  }
}