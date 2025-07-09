import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-leave-name-dropdown',
  templateUrl: './leave-name-dropdown.component.html',
  styleUrls: ['./leave-name-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LeaveNameDropdownComponent),
      multi: true
    }
  ]
})
export class LeaveNameDropdownComponent implements ControlValueAccessor {
  @Input() options: string[] = ["病假", "事假", "公假", "生日假", "喪假", "婚假"];
  value: string = '';
  disabled = false;
  touched = false;
  open = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleDropdown(): void {
    this.open = !this.open;
  }

  select(option: string): void {
    this.value = option;
    this.onChange(option);
    this.markAsTouched();
    this.open = false;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}