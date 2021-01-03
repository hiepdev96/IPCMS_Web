import { SelectionInput } from './model/selection-input';

export const ListClassifyCustomer: SelectionInput[] = [
    new SelectionInput({
        name: 'Hồ sơ phân loại khách hàng',
        value: 'Y',
    }),
    new SelectionInput({
        name: 'Hồ sơ không phân loại khách hàng',
        value: 'N',
    })
];
export const ListLoanForm: SelectionInput[] = [
    new SelectionInput({
        name: 'Tín chấp',
        value: 0,
    }),
    new SelectionInput({
        name: 'Thế chấp',
        value: 1,
    })
];
export const ListTypeCustomer: SelectionInput[] = [
    new SelectionInput({
        name: 'Khách hàng mới',
        value: 0,
    }),
    new SelectionInput({
        name: 'Khách hàng thân thiết',
        value: 1,
    }),
    new SelectionInput({
        name: 'Khách hàng thường xuyên',
        value: 2,
    }),
    new SelectionInput({
        name: 'Khách hàng VIP',
        value: 3,
    }),
    new SelectionInput({
        name: 'Khách hàng xấu',
        value: 4,
    }),
];
export const ListFormPayment: SelectionInput[] = [
    new SelectionInput({
        name: 'Trả góp hàng tháng',
        value: 0,
    }),
    new SelectionInput({
        name: 'Trả góp 1 lần',
        value: 1,
    }),
];
export const ListTypeOfLoan = [
    new SelectionInput({
        name: 'Tiền mặt',
        value: 0,
    }),
    new SelectionInput({
        name: 'Tiêu dùng',
        value: 1,
    }),
    new SelectionInput({
        name: 'Trả góp',
        value: 2,
    }),
];
