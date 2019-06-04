import { Component } from '@angular/core';

import { Barcode, ScanSettings } from 'scandit-sdk';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	accessCamera = true;
	title = 'scandit-app';

	public settings = new ScanSettings({ enabledSymbologies: [ Barcode.Symbology.CODE128 ] });

	onScan(event) {
		this.title = event.barcodes[0].data;
	}

	toggle() {
		this.accessCamera = !this.accessCamera;
	}
}
