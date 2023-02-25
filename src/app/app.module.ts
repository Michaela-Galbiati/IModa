import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { routing } from './app-routing.module';
import { MinvernoComponent } from './minverno/minverno.component';
import { MveraoComponent } from './mverao/mverao.component';
import { MprimaveraComponent } from './mprimavera/mprimavera.component';
import { MoutonoComponent } from './moutono/moutono.component';
import { FoutonoComponent } from './foutono/foutono.component';
import { FveraoComponent } from './fverao/fverao.component';
import { FinvernoComponent } from './finverno/finverno.component';
import { FprimaveraComponent } from './fprimavera/fprimavera.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PgprincComponent,
    InfantilComponent,
    MasculinoComponent,
    FemininoComponent,
    RodapeComponent,
    PrimaveraComponent,
    OutonoComponent,
    InvernoComponent,
    VeraoComponent,
    MinvernoComponent,
    MveraoComponent,
    MprimaveraComponent,
    MoutonoComponent,
    FoutonoComponent,
    FveraoComponent,
    FinvernoComponent,
    FprimaveraComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
