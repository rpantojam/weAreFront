export class Carts {

    id?: number;
    userId?: number;
    creationDate?: Date;
    status?: string;

    constructor(id?: number,
        userId?: number,
        creationDate?: Date,
        status?: string) {
            this.id = id;
            this.userId = userId;
            this.creationDate = creationDate;
            this.status = status;
        }

}