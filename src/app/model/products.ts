export class Products {

    id?: number;
    name?: string;
    description?: string;
    curPrice?: number;
    availableAmount?: number;
    requestedAmount?: number;

    constructor(id?: number,
        name?: string,
        description?: string,
        curPrice?: number, 
        availableAmount?: number) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.curPrice = curPrice;
            this.availableAmount = availableAmount;
    }

}