

import {RouterModule, Routes} from '@angular/router';
import {TrabalhosComponent} from './trabalhos/trabalhos.component';
import {NovoTrabalhoComponent} from './novo-trabalho/novo-trabalho.component';
import {ModuleWithProviders} from '@angular/core';

const APP_ROTAS: Routes = [
  {path : '' , component: TrabalhosComponent},
  {path: 'novo-trabalho', component: NovoTrabalhoComponent},
  {path: 'trabalhos', component: TrabalhosComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);

