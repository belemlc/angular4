import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular//common';
import { ContatoService } from "app/contatos/contato.service";
import { Contato } from "app/contatos/contato.model";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {
    
    contato: Contato;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) {

    }

    ngOnInit(): void {
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if (id) {
                this.contatoService.getContato(id)
                .then((contato) => {
                    this.contato = contato;
                })
            }
        })
    }

    teste(): void {
        console.log(this.contato);
    }

}