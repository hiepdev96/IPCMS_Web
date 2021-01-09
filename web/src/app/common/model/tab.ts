export class Tab<T> implements ITab<T>{
    public id: string;
    public name: string;
    public value: T;
    public status?: string;
    public isShowClose = true;
    constructor(data?: ITab<T>) {
        this.id = data?.id;
        this.value = data?.value;
        this.name = data?.name;
        this.status = data?.status;
        if (data && data.isShowClose === false) {
            this.isShowClose = false;
        }
    }
    onCheck(id: string): boolean {
        return this.id === id;
    }
}

export interface ITab<T> {
    id: string;
    name: string;
    value: T;
    status?: string;
    isShowClose?: boolean;
}
