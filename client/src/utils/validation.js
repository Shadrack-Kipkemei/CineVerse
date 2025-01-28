export const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };
  