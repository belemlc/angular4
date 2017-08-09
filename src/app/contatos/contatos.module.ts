import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosListaComponent } from "app/contatos/contatos-lista.component";
import { ContatoRoutingModule } from "app/contatos/contato-routing.module";
import { ContatoDetalheComponent } from "app/contatos/contato-detalhe.component";
import { ContatoService } from "app/contatos/contato.service";

@NgModule({
    imports: [ 
        CommonModule,
        ContatoRoutingModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports: [ ContatosListaComponent ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule {}