import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogigatorSharedCompsComponent } from './logigator-shared-comps.component';

describe('LogigatorSharedCompsComponent', () => {
	let component: LogigatorSharedCompsComponent;
	let fixture: ComponentFixture<LogigatorSharedCompsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LogigatorSharedCompsComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LogigatorSharedCompsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
