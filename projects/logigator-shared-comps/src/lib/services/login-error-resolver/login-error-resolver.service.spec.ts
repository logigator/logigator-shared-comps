import { TestBed } from '@angular/core/testing';

import { LoginErrorResolverService } from './login-error-resolver.service';

describe('LoginErrorResolverService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: LoginErrorResolverService = TestBed.get(LoginErrorResolverService);
		expect(service).toBeTruthy();
	});
});
