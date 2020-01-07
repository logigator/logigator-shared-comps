import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PopupContentComp} from '../popup/popup-content-comp';
import {AuthService} from '../../services/auth.service';
import {AccountActionErrorResolverService} from '../../services/account-action-error-resolver/account-action-error-resolver.service';

@Component({
	selector: 'logi-login-popup',
	templateUrl: './login-popup.component.html',
	styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent extends PopupContentComp implements OnInit {

	public loginForm: FormGroup;
	public errorMessage = '';

	public showResendButton = false;
	public showResendSuccessMessage = false;

	constructor(
		private formBuilder: FormBuilder,
		private auth: AuthService,
		private loginErrorResolverService: AccountActionErrorResolverService,
		@Optional() private router: Router
	) {
		super();
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			user: ['', [Validators.required]],
			password: ['', [Validators.required]]
		});
	}

	public async submit() {
		if (this.loginForm.invalid)
			return;

		try {
			await this.auth.loginEmail(this.loginForm.controls.user.value, this.loginForm.controls.password.value);
			this.requestClose.emit();
			if (this.router) await this.router.navigate(['my']);
		} catch (e) {
			if (e.error.error.description === 'EMAIL_NOT_VERIFIED') this.showResendButton = true;
			this.errorMessage = await this.loginErrorResolverService.getErrorMessage(e);
		}
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
			await this.auth.authenticateTwitter();
			this.requestClose.emit();
			if (this.router) await this.router.navigate(['my']);
		} catch (e) {
			this.errorMessage = await this.loginErrorResolverService.getErrorMessage(e);
		}
	}

	public async resendVerificationMail() {
		try {
			await this.auth.resendVerificationMail(this.loginForm.controls.user.value, this.loginForm.controls.password.value);
			this.showResendSuccessMessage = true;
		} catch (e) {
			this.errorMessage = await this.loginErrorResolverService.getErrorMessage(e);
		}
	}

	public close() {
		this.requestClose.emit();
	}
}
