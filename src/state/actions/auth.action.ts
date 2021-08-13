import ACTION from './action.types';

export const setToken = (token: string) => ({
  type: ACTION.SET_TOKEN,
  payLoad: token
});

export const setLoggedIn = (isLoggedIn: boolean) => ({
  type: ACTION.SET_LOGGED_IN,
  payLoad: isLoggedIn
});
