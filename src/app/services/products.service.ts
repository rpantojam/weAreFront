import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/products';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    serverURL = 'http://localhost:8080/products/';

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    constructor(private httpClient: HttpClient) { }

    public list(): Observable<Products[]> {
        return this.httpClient.get<Products[]>(this.serverURL + 'all', this.httpOptions);
    }

    register(product: any): Observable<any> {
        return this.httpClient.post("http://localhost:8080/products/register", product);
    }

}