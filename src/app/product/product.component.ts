import { Component } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: "app-products",
    templateUrl: "./product.component.html"
})

export class ProductComponent {
    
    constructor(public productService: ProductsService) {
    }

    form = new FormGroup({});
    model: any = {};
    options: FormlyFormOptions = {};
    fields: FormlyFieldConfig[] = [
        {
            className: 'section-label',
            template: '<hr /><div><strong>Nuevo Producto:</strong></div>',
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'name',
                    templateOptions: {
                        label: 'Nombre',
                        required: true
                    },
                },
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'description',
                    templateOptions: {
                        label: 'Descripción',
                        required: false
                    },
                },
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'curPrice',
                    templateOptions: {
                        label: 'Precio',
                        type: 'number',
                        required: true
                    },
                },
                {
                    className: 'col-12',
                    type: 'input',
                    key: 'availableAmount',
                    templateOptions: {
                        label: 'Cantidad en stock',
                        type: 'number',
                        required: true
                    },
                },
            ],
        },
        { template: '<hr />' },
    ];

    submit() {
        this.productService.register(this.model).subscribe(data => {
            this.model = {};
            alert("Registro Exitoso");
        });
    }
}