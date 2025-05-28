
class AppSettings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db!: any;

  constructor() {
   
  }

  setAuthToken(token: string) {
    localStorage.setItem(`auth`, token);
  }

  getAuthToken(): string | undefined {
    return localStorage.getItem(`auth`) as string;
  }

  clear() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
const appSettings = new AppSettings();
export default appSettings;
