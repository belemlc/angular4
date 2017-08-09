import { Component, OnInit } from '@angular/core';
import { Contato } from "app/contatos/contato.model";
import { ContatoService } from "app/contatos/contato.service";

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
    styleUrls: ['contatos-lista.component.scss']
})
export class ContatosListaComponent implements OnInit {

    contatos: Contato[];

    constructor(private _contatoService: ContatoService) {

    }

    ngOnInit():void {
        this._contatoService.getContatos().then((contatos: Contato[]) => {
            this.contatos = contatos;
        }). catch(err => console.log(err));
    }

}