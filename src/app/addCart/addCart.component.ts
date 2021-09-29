import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { CartProductsDto } from "../model/carProductsDto";
import { CartProducts } from "../model/cartProducts";
import { CartProductsService } from "../services/cartProducts.service";
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-add',
    templateUrl: './addCart.component.html'
})

export class AddCartComponent implements OnInit {

    productId: string = "";
    reqAmount: number = 1;
    avAmount: string = "";
    productName: string = "";
    price: string = "";

    constructor(private route: ActivatedRoute, private service: CartProductsService, private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
        this.route.queryParams
            .subscribe(params => {
                this.productId = params.pId;
                this.avAmount = params.avAm;
                this.productName = params.pn;
                this.price = params.price;
            }
            );
    }

    addToCart(): void {
        let item = new CartProducts();
        item.productAmount = this.reqAmount + "";
        item.productId = this.productId;
        item.productPrice = this.price;

        let dto = new CartProductsDto();
        dto.item = item;
        dto.userId = this.userService.getUserId();
        this.service.addToCart(dto).subscribe(
            data => {
                console.log(data);
                alert("Registro exitoso");
                this.router.navigate(['/home']);
            },
            err => {
                console.log(err);
                alert("Error inesperado");
            }
        );
    }
}