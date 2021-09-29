import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../services/cart.service";
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {

    cart: any = {};
    products: any = [];
    productId: string = '';

    constructor(private cartsService: CartService, private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        /*this.route.queryParams
            .subscribe(params => {
                this.productId = params.productId;
            }
            );*/
        this.loadCart();
    }

    loadCart(): void {
        this.cartsService.getByUser(this.userService.getUserId()).subscribe(
            data => {
                this.cart = data.cart;
                this.products = data.products;
            },
            err => console.log(err));
    }
}