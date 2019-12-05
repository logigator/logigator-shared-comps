export abstract class AuthService {
	abstract authenticateTwitter(): Promise<any>;
	abstract authenticateGoogle(): Promise<any>;
	abstract registerEmail(username: string, email: string, password: string, recaptcha: string);
	abstract loginEmail(user: string, password: string);
	abstract logout();
	abstract get isLoggedIn(): boolean;
}
