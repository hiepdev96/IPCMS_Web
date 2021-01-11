import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { validateDecimalNumber, validateMobilephone, validateNormalCharacters } from '../../../common/validators';
import { takeUntil } from 'rxjs/operators';
import { forwardRef } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() placeholder: string;
  @Input() label: string;
  @Input() value: string;
  @Input() required: boolean;
  @Input() isNormalCharacters: boolean;
  @Input() isDecimalNumber: boolean;
  @Input() isEmail: boolean;
  @Input() isTel: boolean;
  @Input() type: string;
  @Input() hint: string;
  @Input() suffix: string;
  @Input() length: number;
  @Input() max: number;
  @Input() min: number;
  @Input() icon: string;
  @Input() pattern: string;
  @Input() textarea: boolean;
  @Input() readonly: boolean;
  control = new FormControl('');
  @Output() valid = new EventEmitter<boolean>();


  private onDestroy$: Subject<void> = new Subject<void>();

  constructor() {
  }



  ngOnInit(): void {
    const lstValidate = [];
    if (this.isNormalCharacters) {
      lstValidate.push(validateNormalCharacters);
    }
    if (this.isDecimalNumber) {
      console.log(this.isDecimalNumber);
      lstValidate.push(validateDecimalNumber);
    }
    if (this.isEmail) {
      lstValidate.push(Validators.email);
    }
    if (this.isTel) {
      lstValidate.push(validateMobilephone);
    }
    if (this.required) {
      lstValidate.push(Validators.required);
    }
    if (this.pattern) {
      lstValidate.push(Validators.pattern(this.pattern));
    }
    if (lstValidate.length > 0) {
      this.control.setValidators(lstValidate);
    }
    if (this.value) {
      this.control.setValue(this.value);
    }
    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.outputValue());
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
  outputValue(): void {
    this.onChange(this.control.value);
    this.onTouched();
    this.valid.emit(this.control.valid);
  }

  onChange: any = (value: any) => { };
  onTouched: any = () => { };

  writeValue(obj: any): void {
    console.log(obj);
    this.control.setValue(obj, {
      emitModelToViewChange: true
    });
    if (obj === null || obj === undefined || obj === '') {
      this.control.reset();
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
  validate(c: FormControl): ValidationErrors {
    return this.control.errors;
  }
}
