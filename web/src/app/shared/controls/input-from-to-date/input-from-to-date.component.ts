import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-from-to-date',
  templateUrl: './input-from-to-date.component.html',
  styleUrls: ['./input-from-to-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFromToDateComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputFromToDateComponent),
      multi: true
    }
  ]
})
export class InputFromToDateComponent implements OnInit, OnDestroy, ControlValueAccessor {


  @Input() placeholder: string;
  @Input() label: string;
  @Input() value: string;
  @Input() required: boolean;
  @Input() type: string;
  @Input() hint: string;
  @Input() suffix: string;
  @Input() length: number;
  @Input() max: number;
  @Input() icon: string;
  @Input() textarea: boolean;
  control = new FormControl('');
  @Output() valid = new EventEmitter<boolean>();

  ranges: any = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    '7 ngày trước': [moment().subtract(6, 'days'), moment()],
    '30 ngày trước': [moment().subtract(29, 'days'), moment()],
    'Tháng này': [moment().startOf('month'), moment().endOf('month')],
    'Tháng trước': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
  };
  locale = {
    cancelLabel: 'Hủy',
    applyLabel: 'Đồng ý',
    format: 'DD/MM/YYYY',
    daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    monthNames: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
  };
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor() {
  }



  ngOnInit(): void {
    const lstValidate = [];

    if (this.required) {
      lstValidate.push(Validators.required);
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
