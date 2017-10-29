

import {RouterModule, Routes} from '@angular/router';
import {TrabalhosComponent} from './trabalhos/trabalhos.component';
import {NovoTrabalhoComponent} from './novo-trabalho/novo-trabalho.component';
import {ModuleWithProviders} from '@angular/core';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const APP_ROTAS: Routes = [
    {path : '' , component: TrabalhosComponent},
    {path: 'novo-trabalho', component: NovoTrabalhoComponent},
    {path: 'trabalhos', component: TrabalhosComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);

