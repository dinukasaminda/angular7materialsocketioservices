export const APP_CONST_apiKey: string = "4b00d9f6-cf4d-46d4-934d-9ab923a48538";

export class AppUser {
  authUser: authUser = new authUser();
  appState: number = 0;
  appData: any = {};
}
export class authUser {
  user: any = {};
  authToken: string = "";
  userState: number = 0;
  lang: string = "en";
  type: number = 0;
}
