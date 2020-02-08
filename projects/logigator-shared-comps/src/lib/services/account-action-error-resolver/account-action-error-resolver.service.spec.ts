import { TestBed } from '@angular/core/testing';

import { AccountActionErrorResolverService } from './account-action-error-resolver.service';

describe('AccountActionErrorResolverService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AccountActionErrorResolverService = TestBed.inject(AccountActionErrorResolverService);
		expect(service).toBeTruthy();
	});
});
