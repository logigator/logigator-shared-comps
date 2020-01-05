/*
 * Public API Surface of logigator-shared-comps
 */

export * from './lib/logigator-shared-comps-config';

export * from './lib/components/file-input/file-input.component';
export * from './lib/components/input/input.component';
export * from './lib/components/input-error/input-error.component';
export * from './lib/components/switch/switch.component';
export * from './lib/components/popup/popup.component';
export * from './lib/components/popup/popup-content-comp';
export * from './lib/components/login-popup/login-popup.component';
export * from './lib/components/register-popup/register-popup.component';

export * from './lib/directives/auto-font-size/auto-font-size.directive';

export * from './lib/services/popup/popup.service';
export * from './lib/services/font-width/font-width.service';
export * from './lib/services/account-action-error-resolver/account-action-error-resolver.service';

export {ThemingService as SharedCompsThemingService} from './lib/services/theming.service';
export {AuthService as SharedCompsAuthService} from './lib/services/auth.service';

export * from './lib/logigator-shared-comps.module';
