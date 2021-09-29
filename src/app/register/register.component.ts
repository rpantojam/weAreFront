import { Component } from "@angular/core";
import { UserService } from "../user/user.service";
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: "app-login",
    templateUrl: "./register.component.html"
})

export class RegisterComponent {
    
    constructor(public userService: UserService) {
    }

    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            className: 'section-label',
            template: '<hr /><div><strong>Datos de Usuario:</strong></div>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-4',
                    type: 'input',
                    key: 'document',
                    templateOptions: {
                        label: 'Documento',
                        type: 'number',
                        required: true
                    },
                },
                {
                    className: 'col-4',
                    type: 'input',
                    key: 'firstName',
                    templateOptions: {
                        label: 'Nombre',
                        required: true
                    },
                },
                {
                    className: 'col-4',
                    type: 'input',
                    key: 'lastName',
                    templateOptions: {
                        label: 'Apellido',
                        required: true
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.firstName',
                    },
                },
            ],
        },
        { template: '<hr />' },
        {
            className: 'section-label',
            template: '<hr /><div><strong>Datos de Acceso:</strong></div>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-6',
                    type: 'input',
                    key: 'userName',
                    templateOptions: {
                        label: 'Usuario',
                        required: true
                    },
                },
                {
                    className: 'col-6',
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
        this.userService.register(this.model).subscribe(data => {
            this.model = {};
            alert("Registro Exitoso");
        });
    }
}