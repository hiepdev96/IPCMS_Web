import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Communce, CommunceResponse, District } from 'src/app/common/model/generic-model';
import { ProfileClient } from 'src/app/connection/profile-connector';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'phuong-xa-ctrl',
  templateUrl: './phuong-xa-ctrl.component.html',
  styleUrls: ['./phuong-xa-ctrl.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhuongXaCtrlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhuongXaCtrlComponent),
      multi: true
    }
  ]
})
export class PhuongXaCtrlComponent implements OnInit, OnDestroy, ControlValueAccessor {

  control = new FormControl('');
  @Input() label: string;
  @Input() placeholder: string;
  @Input() set required(value: boolean){
    if (value) {
      this.control.setValidators(Validators.required);
    }
  }
  @Input() isHiddenDefault: boolean;
  @Input() submitted: boolean;
  _quanHuyen: string | District | any;
  @Input() set quanHuyen(value: string | District | null) {
    this._quanHuyen = value;
    if (this._quanHuyen) {
      this.getCommune();
    } else {
      this.lst = [];
      this.control.setValue(this.defaultValue);
    }
  }
  defaultValue = null;
  private onDestroy$: Subject<void> = new Subject<void>();
  lst: District[] = [];
  constructor(
    private profileClient: ProfileClient
  ) {
  }

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.outputValue());
  }
  getCommune(): void {
    let code = null;
    if (this._quanHuyen) {
      if (this._quanHuyen instanceof District) {
        code = this._quanHuyen.code;
      } else {
        code = this._quanHuyen;
      }
    }
    this.profileClient.getCommune(code)
      .pipe(map(x => CommunceResponse.fromJS(x)))
      .subscribe(x => {
        if (x.errorCode === 'OK') {
          this.lst = x.communce;
          const value = this.control.value;
          if (value) {
            if (value instanceof Communce) {
              if (this.lst.indexOf(value) === -1) {
                this.control.setValue(this.defaultValue);
              }
            } else {
              if (this.lst.findIndex(z => z.code === value) === -1) {
                this.control.setValue(this.defaultValue);
              }
            }
          }
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

  writeValue(obj: string | Communce): void {
    if (obj instanceof Communce) {
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
  getCommunes(): District[] {
    return this.lst;
  }
  validate(c: FormControl): any {
    return this.control.errors;
  }
}
