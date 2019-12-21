import {ModuleWithProviders, NgModule} from '@angular/core';
import {InputComponent} from './components/input/input.component';
import {InputErrorComponent} from './components/input-error/input-error.component';
import {CommonModule} from '@angular/common';
import {SwitchComponent} from './components/switch/switch.component';
import {FileInputComponent} from './components/file-input/file-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PopupComponent} from './components/popup/popup.component';
import {TranslateModule} from '@ngx-translate/core';
import {RegisterPopupComponent} from './components/register-popup/register-popup.component';
import {LoginPopupComponent} from './components/login-popup/login-popup.component';
import {LogigatorSharedCompsConfig} from './logigator-shared-comps-config';
import { AutoFontSizeDirective } from './directives/auto-font-size/auto-font-size.directive';



@NgModule({
	declarations: [
		InputComponent,
		InputErrorComponent,
		SwitchComponent,
		FileInputComponent,
		PopupComponent,
		RegisterPopupComponent,
		LoginPopupComponent,
		AutoFontSizeDirective
	],
	entryComponents: [
		PopupComponent,
		RegisterPopupComponent,
		LoginPopupComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	exports: [
		InputComponent,
		InputErrorComponent,
		SwitchComponent,
		FileInputComponent,
		PopupComponent,
		RegisterPopupComponent,
		LoginPopupComponent,
		AutoFontSizeDirective
	]
})
export class LogigatorSharedCompsModule {
	static forRoot(config: LogigatorSharedCompsConfig): ModuleWithProviders {
		return {
			ngModule: LogigatorSharedCompsModule,
			providers: [
				config.authService,
				config.themingService
			]
		};
	}
}
