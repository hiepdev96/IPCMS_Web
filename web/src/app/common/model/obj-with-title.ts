export class ObjWithTitle<T> implements IObjWithTitle<T>{
    public title?: string;
    public value: T;
    constructor(data?: IObjWithTitle<T>){
        this.title = data?.title;
        this.value = data?.value;
    }
}

export interface IObjWithTitle<T> {
    title?: string;
     value: T;
}
