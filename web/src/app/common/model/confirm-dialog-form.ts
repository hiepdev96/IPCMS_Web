export class ConfirmDialogForm {
    public title: string;
    public message: string;
    public required: boolean;
    constructor(data?: IConfirmDialogForm) {
        this.title = data?.title;
        this.message = data?.message;
        this.required = data?.required;
    }
}
export interface IConfirmDialogForm {
    title: string;
    message: string;
    required: boolean;
}


