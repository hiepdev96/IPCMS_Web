export class ListWithTitle<T> implements IListWithTitle<T>{
    public title?: string;
    public values: T[];
    constructor(data?: IListWithTitle<T>) {
        this.title = data?.title;
        this.values = data?.values;
    }
}

export interface IListWithTitle<T> {
    title?: string;
    values: T[];
}
