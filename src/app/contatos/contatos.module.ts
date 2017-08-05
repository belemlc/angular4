import { NgModule } from '@angular/core';
import { ContatosListaComponent } from "app/contatos/contatos-lista.component";

@NgModule({
    declarations: [
        ContatosListaComponent
    ],
    exports: [ ContatosListaComponent ]
})
export class ContatosModule {}