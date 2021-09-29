import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})

export class LoginComponent {

    constructor(public userService: UserService) {
    }

    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            className: 'section-label',
            template: '<hr /><div><strong>Login</strong></div>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'userName',
                    templateOptions: {
                        label: 'Usuario',
                        required: true
                    },
                },
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'password',
                    templateOptions: {
                        label: 'Contraseña',
                        type: 'password',
                        required: true
                    },
                },
            ],
        },
        { template: '<hr />' },
    ];

    submit() {
        this.userService.login(this.model).subscribe(
            data => {
                this.userService.setToken(data.token);
                this.userService.setUserId(data.userId);
            },
            error => {
                console.log(error);
                alert(error.error ? error.error.message ? error.error.message : error.error.error.message : error.message);
            });
    }
}