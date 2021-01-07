import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Provincial, ProvincialResponse } from 'src/app/common/model/generic-model';
import { ProfileClient } from 'src/app/connection/profile-connector';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tinh-thanh-ctrl',
  templateUrl: './tinh-thanh-ctrl.component.html',
  styleUrls: ['./tinh-thanh-ctrl.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TinhThanhCtrlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TinhThanhCtrlComponent),
      multi: true
    }
  ]
})
export class TinhThanhCtrlComponent implements OnInit, OnDestroy, ControlValueAccessor {

  control = new FormControl('');
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() isHiddenDefault: boolean;
  @Input() submitted: boolean;
  defaultValue = null;
  private onDestroy$: Subject<void> = new Subject<void>();
  lst: Provincial[] = [];
  constructor(
    private profileClient: ProfileClient
  ) {
    this.profileClient.getProvincial()
      .pipe(map(x => ProvincialResponse.fromJS(x)))
      .subscribe(x => {
        if (x.errorCode === 'OK') {
          this.lst = x.provincial;
        }
      });

    if (this.required) {
      this.control.setValidators(Validators.required);
    }
  }

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.outputValue());
  }
  outputValue(): void {
    this.onChange(this.control.value);
    this.onTouched();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
  onChange: any = (value: any) => { };
  onTouched: any = () => { };

  writeValue(obj: string | Provincial): void {
    if (obj instanceof Provincial) {
      this.control.setValue(obj);
    } else {
      if (this.lst && this.lst.length > 0) {
        const tt = this.lst.find(x => x.code === obj);
        if (tt) {
          this.control.setValue(tt);
        }
      }
    }
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
  getProvices(): Provincial[] {
    return this.lst;
  }
  validate(c: FormControl): any {
    return this.control.errors;
  }
}
