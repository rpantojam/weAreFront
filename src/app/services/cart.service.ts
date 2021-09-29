import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartDto } from '../model/cartsDto';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    serverURL = 'http://localhost:8080/carts/';

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    constructor(private httpClient: HttpClient) { }

    public getByUser(userId: string): Observable<CartDto> {
        return this.httpClient.get<CartDto>(this.serverURL + 'getByUser?userId=' + userId, this.httpOptions);
    }

}