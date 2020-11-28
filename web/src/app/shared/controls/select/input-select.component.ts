import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true
    }
  ]
})
export class InputSelectComponent implements OnInit, OnDestroy {

  @Input() placeholder: string;
  @Input() label: string;

  @Input() required: boolean;
  @Input() isNormalCharacters: boolean;
  @Input() isEmail: boolean;
  @Input() isHiddenDefault: boolean;
  @Input() type: string;
  @Input() length: number;
  @Input() max: number;
  $items: any;
  keyDisplay: any;
  @Input() set items(value: any) {
    this.$items = value;
  }
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
  getDisplayName(item: any): string {
    if (this.keyDisplay) {
      return item[this.keyDisplay];
    }
    return item;
  }
}
