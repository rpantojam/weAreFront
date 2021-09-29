import { CartProducts } from "./cartProducts";
import { Carts } from "./carts";

export class CartDto {
    cart?: Carts;
    products?: CartProducts[];
}