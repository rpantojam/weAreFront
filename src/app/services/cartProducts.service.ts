import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProducts } from '../model/cartProducts';
import { CartProductsDto } from '../model/carProductsDto';

@Injectable({
    providedIn: 'root'
})
export class CartProductsService {

    serverURL = 'http://localhost:8080/cartProducts/';

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    constructor(private httpClient: HttpClient) { }

    public addToCart(dto: CartProductsDto): Observable<CartProducts> {
        return this.httpClient.post<CartProducts>(this.serverURL + 'add', dto);
    }

}