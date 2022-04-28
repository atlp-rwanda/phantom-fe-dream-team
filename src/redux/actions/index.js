  export const updateProfile = (username,email)=>{
    return {
      type: "UPDATE", Username:username, Email:email,
    };
  }
  export const changePassword = (Password)=>{
    return {
      type: "CHANGE", NewPassword:Password,
    };
  }