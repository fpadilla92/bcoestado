import { Routes } from '@angular/router';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

NgModule({
    declarations:[AppComponent],
    imports:[
        BrowserModule,
        CommonModule,
        TransferenciaComponent
    ],
    bootstrap:[AppComponent]
})

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'transferencia', component: TransferenciaComponent },
];
