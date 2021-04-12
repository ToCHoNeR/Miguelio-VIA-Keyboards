
export class Device {

    path: string;
    productId: number;
    vendorId: number;
    product: string;

    constructor(data: any) {
        this.vendorId = data.vendorId;
        this.productId = data.productId;
        this.path = data.path;
        this.product = data.product;
    }
}


