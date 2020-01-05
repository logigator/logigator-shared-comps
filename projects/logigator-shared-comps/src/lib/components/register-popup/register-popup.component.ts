import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupContentComp} from '../popup/popup-content-comp';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AccountActionErrorResolverService} from '../../services/account-action-error-resolver/account-action-error-resolver.service';

@Component({
	selector: 'logi-register-popup',
	templateUrl: './register-popup.component.html',
	styleUrls: ['./register-popup.component.scss']
})
export class RegisterPopupComponent extends PopupContentComp implements OnInit {

	public registerForm: FormGroup;
	public errorMessage = '';

	public showSuccessMessage = true;

	constructor(
		private formBuilder: FormBuilder,
		private auth: AuthService,
		private loginErrorResolverService: AccountActionErrorResolverService,
		@Optional() private router: Router
	) {
		super();
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			email: ['', [
				Validators.required, Validators.email
			]],
			password: ['', [
				Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*[0-9]).*$')
			]],
			confirm_password: ['', [
				Validators.required
			]],
			username: ['', [
				Validators.required, Validators.minLength(2), Validators.maxLength(20)
			]],
		}, {
			validators: ((x: FormGroup) => {
				return (x.controls.password.value !== x.controls.confirm_password.value) ? {passwordMatch: {value: x.controls.password.value}} : null;
			})
		});
	}

	public async submit() {
		if (this.registerForm.invalid)
			return;

		// @ts-ignore
		grecaptcha.ready(() => {
			// @ts-ignore
			grecaptcha.execute('6Le9BbgUAAAAAHJupU1XiAa8n1Z0M2YFHL89OMMp', {action: 'register'}).then(async (token) => {
				try {
					// tslint:disable-next-line:max-line-length
					await this.auth.registerEmail(this.registerForm.controls.username.value, this.registerForm.controls.email.value, this.registerForm.controls.password.value, token);
					this.showSuccessMessage = true;
				} catch (e) {
					this.errorMessage = await this.loginErrorResolverService.getErrorMessage(e);
				}
			});
		});
	}

	public async loginGoogle() {
		try {
			await this.auth.authenticateGoogle();
			this.requestClose.emit();
			if (this.router) await this.router.navigate(['my']);
		} catch (e) {
			this.errorMessage = await this.loginErrorResolverService.getErrorMessage(e);
		}
	}

	public async loginTwitter() {
		try {
			await this.auth.authenticateGoogle();
			this.requestClose.emit();
			if (this.router) await this.router.navigate(['my']);
		} catch (e) {
			this.errorMessage = await this.loginErrorResolverService.getErrorMessage(e);
		}
	}

	public close() {
		this.requestClose.emit();
	}
}
