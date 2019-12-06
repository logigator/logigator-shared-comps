import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PopupContentComp} from '../popup/popup-content-comp';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'logi-login-popup',
	templateUrl: './login-popup.component.html',
	styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent extends PopupContentComp implements OnInit {

	public loginForm: FormGroup;
	public errorMessage = '';

	constructor(
		private formBuilder: FormBuilder,
		private auth: AuthService,
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
		this.auth.loginEmail(this.loginForm.controls.user.value, this.loginForm.controls.password.value).then(() => {
			this.requestClose.emit();
		}).catch(e => {
			switch (e.status) {
				case 401:
					this.errorMessage = 'Incorrect username or password.';
					break;
				default:
					this.errorMessage = 'We\'re sorry, an unknown error occurred while trying to log you in. :(';
					break;
			}
			if (this.router) this.router.navigate(['my']);
		});
	}

	public async loginGoogle() {
		await this.auth.authenticateGoogle();
		this.requestClose.emit();
		if (this.router) await this.router.navigate(['my']);
	}

	public async loginTwitter() {
		await this.auth.authenticateTwitter();
		this.requestClose.emit();
		if (this.router) await this.router.navigate(['my']);
	}

}
