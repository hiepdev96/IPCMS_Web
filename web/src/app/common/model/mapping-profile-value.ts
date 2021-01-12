import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Field } from './generic-model';

export class MappingProfileValue implements IMappingProfileValue {
    public block_id?: string;
    public name?: string;
    public value?: string;
    public nameCtrl?: string;
    public type?: string;
    public lstSelect?: any[];
    public keySelect?: string;
    constructor(data?: IMappingProfileValue) {
        this.block_id = data?.block_id;
        this.name = data?.name;
        this.value = data?.value;
        this.nameCtrl = data?.nameCtrl;
        this.type = data?.type;
        this.lstSelect = data?.lstSelect;
        this.keySelect = data?.keySelect;
    }
    getValue(lst: Field[]): any {
        const res = this.getFieldName(this.name, lst);
        switch (this.type) {
            case 'date':
                return this.convertToDate(res);
            case 'select':
                return this.lstSelect.find(x => x[this.keySelect] === res);
            default:
                return res;
        }
    }
    getValueFromControl(formGroup: FormGroup): any {
        const res = formGroup.get(this.nameCtrl).value;
        switch (this.type) {
            case 'date':
                if (res) {
                    const d = moment(res);
                    console.log(d);
                    console.log(d.toString());
                    if (d.toString() !== 'Invalid date') {
                        return d.format('YYYY-MM-DD');
                    }
                }
                return '';
            case 'select':
                const r = res[this.keySelect];
                if (r === null || r === undefined) {
                    return '';
                }
                return r;
            default:
                if (res === null || res === undefined) {
                    return '';
                }
                return res;

        }
    }
    private getFieldName(name: string, lstField: Field[]): string {
        const res = lstField.find(x => x.name === name)?.value;
        if (!res) {
            return '';
        }
        return res;
    }
    private convertToDate(value: string): Date {
        const res = new Date(value + 'Z');
        if (res.toString() !== 'Invalid Date') {
            return res;
        }
        return null;
    }
}

export interface IMappingProfileValue {
    keySelect?: string;
    block_id?: string;
    name?: string;
    value?: string;
    nameCtrl?: string;
    type?: string;
    lstSelect?: any[];
}
