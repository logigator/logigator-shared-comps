export abstract class AuthService {
	abstract authenticateTwitter(): Promise<any>;
	abstract authenticateGoogle(): Promise<any>;
	abstract registerEmail(username: string, email: string, password: string, recaptcha: string): Promise<any>;
	abstract loginEmail(user: string, password: string): Promise<any>;
	abstract resendVerificationMail(user: string, password: string): Promise<any>;
	abstract logout(): Promise<any>;
	abstract get isLoggedIn(): boolean;
}
