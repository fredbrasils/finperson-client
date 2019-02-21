import { API_BASE_URL } from '../general';

const AUTH = "/auth/";
export const API_AUTH_SIGNIN_URL = API_BASE_URL + AUTH + "signin";
export const API_AUTH_SIGNUP_URL = API_BASE_URL + AUTH + "signup";
export const API_AUTH_CONFIRM_REGISTRATION_URL = API_BASE_URL + AUTH + "registrationConfirmed";
export const API_AUTH_RESET_PASSWORD_URL = API_BASE_URL + AUTH + "resetPassword";
export const API_AUTH_CONFIRM_RESET_PASSWORD_URL = API_BASE_URL + AUTH + "resetPasswordConfirmed";
export const API_AUTH_UPDATE_PASSWORD_URL = API_BASE_URL + AUTH + "updatePassword";
