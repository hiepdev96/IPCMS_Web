export class Tab<T> implements ITab<T>{
    public id: string;
    public name: string;
    public value: T;
    constructor(data?: ITab<T>) {
        this.id = data.id;
        this.value = data.value;
        this.name = data.name;
    }
    onCheck(id: string): boolean {
        return this.id === id;
    }
}

export interface ITab<T> {
    id: string;
    name: string;
    value: T;
}
