import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: "root"
})

export class UserService {

    constructor(private http: HttpClient, private cookies: CookieService) { }

    login(user: any): Observable<any> {
        return this.http.post("http://localhost:8080/user/login", user);
    }

    register(user: any): Observable<any> {
        return this.http.post("http://localhost:8080/user/register", user);
    }

    setToken(token: string) {
        this.cookies.set("token", token);
    }

    setUserId(userId: string) {
        this.cookies.set("userId", userId);
    }

    getToken() {
        return this.cookies.get("token");
    }

    getUserId() {
        return this.cookies.get("userId");
    }
}