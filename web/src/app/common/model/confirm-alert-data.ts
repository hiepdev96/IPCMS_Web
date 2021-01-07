export class ConfirmAlertData implements IConfirmAlertData {
    title: string;
    message: any;
    constructor(data?: IConfirmAlertData) {
        this.title = data.title;
        this.message = data.message;
    }
}
export interface IConfirmAlertData {
    title: string;
    message: any;
}
