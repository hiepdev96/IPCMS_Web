import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { validateBiggerDate, validateLessPresent } from 'src/app/common/validators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements OnInit, OnDestroy {

  @Input() placeholder: string;
  @Input() label: string;
  @Input() isFromPresent: boolean;
  @Input() required: boolean;
  @Input() length: number;
  @Input() readonly: boolean;
  @Input() max: number;
  _biggerDate: Date;
  @Input() set biggerDate(value: Date) {
    this._biggerDate = value;
    this.setValidator();
  }
  @Input() submitted: boolean;
  control = new FormControl('');
  @Output() valid = new EventEmitter<boolean>();


  private onDestroy$: Subject<void> = new Subject<void>();

  constructor() {
  }



  ngOnInit(): void {
    this.setValidator();
    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.outputValue());
  }
  private setValidator(): void {
    const lstValidator = [];
    if (this.required) {
      lstValidator.push(Validators.required);
    }
    if (this._biggerDate) {
      lstValidator.push(validateBiggerDate(this._biggerDate));
    }
    if (this.isFromPresent) {
      lstValidator.push(validateLessPresent());
    }
    if (lstValidator.length > 0) {
      this.control.setValidators(lstValidator);
    }
    this.control.updateValueAndValidity();
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
