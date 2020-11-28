import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  @Input() required: boolean;
  @Input() length: number;
  @Input() readonly: boolean;
  @Input() max: number;
  control = new FormControl('');
  @Output() valid = new EventEmitter<boolean>();


  private onDestroy$: Subject<void> = new Subject<void>();

  constructor() {
  }



  ngOnInit(): void {
    if (this.required) {
      this.control.setValidators(Validators.required);
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
