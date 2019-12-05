import { TestBed } from '@angular/core/testing';

import { LogigatorSharedCompsService } from './logigator-shared-comps.service';

describe('LogigatorSharedCompsService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: LogigatorSharedCompsService = TestBed.get(LogigatorSharedCompsService);
		expect(service).toBeTruthy();
	});
});
