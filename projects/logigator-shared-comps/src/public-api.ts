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

export * from './lib/services/popup/popup.service';

export {ThemingService as SharedCompsThemingService} from './lib/services/theming.service';
export {AuthService as SharedCompsAuthService} from './lib/services/auth.service';

export * from './lib/logigator-shared-comps.module';
