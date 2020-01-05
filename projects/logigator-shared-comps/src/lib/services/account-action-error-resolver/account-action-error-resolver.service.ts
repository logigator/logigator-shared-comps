import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
	providedIn: 'root'
})
export class AccountActionErrorResolverService {

	constructor(private translate: TranslateService) { }

	public getErrorMessage(error: HttpErrorResponse): Promise<string> {
		if (!['NO_USER', 'EMAIL_NOT_VERIFIED', 'INVALID_PW', 'EMAIL_TAKEN', 'USERNAME_TAKEN', 'MAX_FILE_SIZE']
			.includes(error.error.error.description))
		{
			return this.translate.get('ERROR.ACCOUNT.OTHER').toPromise();
		}
		return this.translate.get('ERROR.ACCOUNT.' + error.error.error.description).toPromise();
	}
}
