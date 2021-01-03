export class Profile {
    public id_profile: string;
    public fullname: string;
    public id_number: string;
    public scope: string;
    public status: string;
    constructor(data?: IProfile) {
        this.id_profile = data.id_profile;
        this.fullname = data.fullname;
        this.id_number = data.id_number;
        this.scope = data.scope;
        this.status = data.status;
    }
}
export interface IProfile {
    id_profile: string;
    fullname: string;
    id_number: string;
    scope: string;
    status: string;
}
