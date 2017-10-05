import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TrabalhoComponent} from './trabalho/trabalho.component';
import {TrabalhosComponent} from './trabalhos/trabalhos.component';
import {NovoTrabalhoComponent} from './novo-trabalho/novo-trabalho.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {TrabalhoService} from './trabalho.service';
import {HttpClientModule} from '@angular/common/http';
import { EditTrabalhoComponent } from './edit-trabalho/edit-trabalho.component';

@NgModule({
    declarations: [
        AppComponent,
        TrabalhoComponent,
        TrabalhosComponent,
        NovoTrabalhoComponent,
        EditTrabalhoComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpClientModule,
    ],
    providers: [TrabalhoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
