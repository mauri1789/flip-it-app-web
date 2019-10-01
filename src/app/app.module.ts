import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { deckReducer } from "./reducers/deck.reducer";
import { DeckEffects } from "./effects/deck.effects";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecksComponent } from './views/decks/decks.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DialogComponent } from './views/elements/dialog/dialog.component';

let MATERIAL_MODULES = [
  MatMenuModule,
  MatButtonModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    DecksComponent,
    DashboardComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MATERIAL_MODULES,
    StoreModule.forRoot({
      decksSummary: deckReducer
    }),
    EffectsModule.forRoot([
      DeckEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
