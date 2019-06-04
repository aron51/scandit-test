import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScanditSdkModule } from 'scandit-sdk-angular';

import { AppComponent } from './app.component';

const KEY = '';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, ScanditSdkModule.forRoot(KEY, 'assets/') ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
