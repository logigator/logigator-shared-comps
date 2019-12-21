import { TestBed } from '@angular/core/testing';

import { FontWidthService } from './font-width.service';

describe('FontWidthService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: FontWidthService = TestBed.get(FontWidthService);
		expect(service).toBeTruthy();
	});
});
