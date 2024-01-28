// authUtils.js (or any utility file)
export const storeToken = (token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem('token', token);
    }
  };
  
  export const clearToken = () => {
    localStorage.removeItem('token');
  };
  
  export const parseToken = (token) => {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const decodedHeader = JSON.parse(atob(tokenParts[0]));
      const decodedPayload = JSON.parse(atob(tokenParts[1]));
      const decodedSignature = atob(tokenParts[2]);
      return { header: decodedHeader, payload: decodedPayload, signature: decodedSignature };
    }
    return null;
  };
  