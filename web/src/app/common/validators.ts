import { FormControl, ValidatorFn, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

export function validateMobilephone(c: FormControl): any {
    if (!c.value) { return null; }
    const MOBILEPHONE_REGEXP = new RegExp('^0([-. ]?[0-9]{1}){9,10}[-. ]?$');
    return MOBILEPHONE_REGEXP.test(c.value) ? null : {
        mobilephone: {
            valid: false
        }
    };
}


export function validateDecimalNumber(c: FormControl): any {
    if (!c.value) { return null; }
    // const DECIMAL_NUMBER_REGEXP = new RegExp(/^\d*\.?,*\d*$/);
    const vS = String(c.value);
    const v = vS.replace(/,/g, '');
    return !Number.isNaN(Number(v)) ? null : {
        decimalNumber: {
            valid: false
        }
    };
}

export function validateNormalCharacters(c: FormControl): any {
    const NORMAL_CHARACTER_REGEXP = new RegExp(/^[a-zA-Z0-9]*$/);
    return NORMAL_CHARACTER_REGEXP.test(c.value) ? null : {
        normalCharacters: {
            valid: false
        }
    };
}

export function validateMoreThanZero(c: FormControl): any {
    if (!c.value) { return null; }
    const vS = String(c.value);
    const v = vS.replace(/,/g, '');
    return (Number(v) > 0) ? null : {
        moreThanZero: {
            valid: false
        }
    };
}
export function validateMaximumNumber(max: number): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        let v = c.value;
        if (!v) { return null; }
        v = String(c.value).replace(/,/g, '');
        const valueNumber = Number(v);
        if (isNaN(valueNumber)) { return null; }
        return (valueNumber <= max) ? null : {
            maximum: {
                valid: false
            }
        };
    };
}
export function validateBiggerDate(max: Date): ValidatorFn {
    return (c: FormControl): ValidationErrors | null => {
        const v = c.value;
        if (!v) { return null; }
        return (v <= max) ? null : {
            biggerDate: {
                valid: false
            }
        };
    };
}

export function validateNotPositiveInteger(c: FormControl): any {
    if (!c.value) { return null; }
    return (Number(c.value) >= 0 && Number.isInteger(c.value)) ? null : {
        notPositiveInteger: {
            valid: false
        }
    };
}

export function requiredIf(required: { value: boolean }): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {

        const value = control.value;
        if ((value == null || value === undefined || value === '') && required.value) {
            return {
                requiredIf: { condition: required.value }
            };
        }
        return null;
    };
}

export function requiredIfForAutocomplete(required: { value: boolean }, obj: { value: any }): ValidatorFn {

    return (control: FormControl): ValidationErrors | null => {

        if ((obj.value == null || obj.value === undefined || obj.value === '') && required.value) {
            return {
                requiredIf: { valid: false }
            };
        }
        return null;
    };
}

export function fileType(types: string[]): any {
    return (control) => {
        const arrType: string[] = control && control.value ? ((control.value)).files.map(f => f.type) : [];
        if (arrType.length === 0) { return null; }
        return (arrType.find(x => types.indexOf(x) === -1) == null)
            ? null
            : {
                fileType: {
                    actualType: arrType,
                    requiredType: types
                }
            };
    };
}

