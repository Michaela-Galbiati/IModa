import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PgprincComponent } from './pgprinc/pgprinc.component';
import { InfantilComponent } from './infantil/infantil.component';
import { MasculinoComponent } from './masculino/masculino.component';
import { FemininoComponent } from './feminino/feminino.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PrimaveraComponent } from './primavera/primavera.component';
import { OutonoComponent } from './outono/outono.component';
import { InvernoComponent } from './inverno/inverno.component';
import { VeraoComponent } from './verao/verao.component';

const routes: Routes =[
  {
    path: 'infantil',
    component: InfantilComponent,
  },
  {
    path: 'feminino',
    component: FemininoComponent,
  },
  {
    path: 'masculino',
    component: MasculinoComponent,
  }
]
export const routing = RouterModule.forRoot(routes)
