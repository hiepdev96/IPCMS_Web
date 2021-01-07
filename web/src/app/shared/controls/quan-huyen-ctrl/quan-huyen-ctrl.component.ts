import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { District, DistrictResponse, Provincial } from 'src/app/common/model/generic-model';
import { ProfileClient } from 'src/app/connection/profile-connector';

@Component({
  selector: 'app-quan-huyen-ctrl',
  templateUrl: './quan-huyen-ctrl.component.html',
  styleUrls: ['./quan-huyen-ctrl.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuanHuyenCtrlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => QuanHuyenCtrlComponent),
      multi: true
    }
  ]
})
export class QuanHuyenCtrlComponent implements OnInit, OnDestroy, ControlValueAccessor {

  control = new FormControl('');
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() isHiddenDefault: boolean;
  @Input() submitted: boolean;
  _tinhThanh: string | Provincial | any;
  @Input() set tinhThanh(value: string | Provincial | any) {
    this._tinhThanh = value;
    if (this._tinhThanh) {
      this.getDistrict();
    }
  }
  defaultValue = null;
  private onDestroy$: Subject<void> = new Subject<void>();
  lst: District[] = [];
  constructor(
    private profileClient: ProfileClient
  ) {
    if (this.required) {
      this.control.setValidators(Validators.required);
    }
  }

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.outputValue());
  }
  getDistrict(): void {
    let code = null;
    if (this._tinhThanh) {
      if (this._tinhThanh instanceof Provincial) {
        code = this._tinhThanh.code;
      } else {
        code = this._tinhThanh;
      }
    }
    const value = this.control.value;
    if (value) {
      if (value instanceof District) {
        if (this.lst.indexOf(value) === -1) {
          this.control.setValue(this.defaultValue);
        }
      } else {
        if (this.lst.findIndex(x => x.code === value) === -1) {
          this.control.setValue(this.defaultValue);
        }
      }
    }
    this.profileClient.getDistrict(code)
      .pipe(map(x => DistrictResponse.fromJS(x)))
      .subscribe(x => {
        if (x.errorCode === 'OK') {
          this.lst = x.district;
        }
      });
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

  writeValue(obj: string | District): void {
    if (obj instanceof District) {
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
