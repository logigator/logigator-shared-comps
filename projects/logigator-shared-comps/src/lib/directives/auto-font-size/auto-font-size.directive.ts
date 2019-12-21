import {
	AfterContentChecked,
	Directive,
	ElementRef,
	Inject,
	Input, OnChanges,
	PLATFORM_ID, SimpleChanges
} from '@angular/core';
import {FontWidthService} from '../../services/font-width/font-width.service';
import {isPlatformBrowser} from '@angular/common';

@Directive({
	selector: '[logiAutoFontSize]'
})
export class AutoFontSizeDirective implements AfterContentChecked, OnChanges {

	@Input()
	desiredFontWidth: number;

	private oldText: string;

	constructor(
		private elementRef: ElementRef<HTMLElement>,
		private fontWidthService: FontWidthService,
		@Inject(PLATFORM_ID) private platformId: string,
	) { }

	ngAfterContentChecked(): void {
		const currText = this.elementRef.nativeElement.innerText;
		if (this.oldText !== currText) {
			this.adjustFontSize();
			this.oldText = currText;
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.adjustFontSize();
	}

	private adjustFontSize() {
		if (!isPlatformBrowser(this.platformId)) return;

		const text = this.elementRef.nativeElement.innerText;
		const style = window.getComputedStyle(this.elementRef.nativeElement);
		const textWidth = this.fontWidthService.getTextWidth(text, style.font);

		this.elementRef.nativeElement.style.fontSize = (Number(style.fontSize.replace('px', '')) * (this.desiredFontWidth / textWidth)) + 'px';
	}

}
