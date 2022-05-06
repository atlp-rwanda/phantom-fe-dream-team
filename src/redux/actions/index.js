  export const updateProfile = (username,email,phone)=>{
    return {
      type: "UPDATE", Username:username, Email:email,Phone:phone
    };
  }
  export const changePassword = (Password)=>{
    return {
      type: "CHANGE", NewPassword:Password,
    };
  }