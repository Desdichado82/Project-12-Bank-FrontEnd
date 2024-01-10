const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    return password.trim() !== '';
  };
  
  const validateForm = (username, password) => {
    const errors = {};
  
    if (!validateEmail(username)) {
      errors.username = 'Please enter a valid email address.';
    }
  
    if (!validatePassword(password)) {
      errors.password = 'Please enter your password.';
    }
  
    return errors;
  };
  
  export default validateForm;