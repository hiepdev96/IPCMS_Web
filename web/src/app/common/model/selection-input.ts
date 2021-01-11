export class SelectionInput {
    public value: any;
    public name: string;
    constructor(data?: ISelectionInput) {
        this.value = data.value;
        this.name = data.name;
    }
}
export interface ISelectionInput {
    value: any;
    name: string;
}
