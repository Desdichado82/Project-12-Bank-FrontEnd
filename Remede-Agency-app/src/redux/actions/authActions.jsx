// authActions.js
export const LoginAction = (user, token) => {
    return {
      type: 'LOGIN',
      payload: { user, token },
    };
  };
  

  export const LogoutAction = () => {
    return {
      type: 'LOGOUT',
    };
  };