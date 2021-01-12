import { sha256, sha224 } from 'js-sha256';
import * as moment from 'moment';
export function change_alias(alias: string | undefined): string {
    if (alias === null || alias === undefined) {
        return '';
    }
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/̀|́|̂|̃|̆|̉|̣|/g, '');
    str = str.replace(/!|0x0300||@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\'|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '');
    str = str.replace(/ + /g, '');
    str = str.trim();
    return str;
}
export function isEmptyOrNull(input): boolean {
    if (input == null || input === undefined) {
        return true;
    } else if (String(input).replace(/\s/g, '').length <= 0) {
        return true;
    }
    return false;
}
export function sleep(ms): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function toNumber(value: any): number {
    const vS = String(value);
    return Number(vS.replace(/,/g, ''));
}

export function SHA256(...params: string[]): string {
    let token = '\\u0000';
    params.forEach(element => {
        token += element + '\\u0000';
    });
    return sha256(token);
}
export function formatDateTimeZone(time: Date): Date {
    if (!time) {
        return null;
    }
    const timezone = new Date().getTimezoneOffset();
    return moment(time).add(-timezone, 'm').toDate();
}
export function dateToString(time: Date): string {
    if (!time) {
        return null;
    }
    return moment(formatDateTimeZone(time)).format('YYYY-MM-DD');
}

export function convertToDate(value: string): Date {
    if (!value) {
        return null;
    };
    const res = new Date(value + 'Z');
    if (res.toString() !== 'Invalid Date') {
        return res;
    }
    return null;
}
