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
  export const setPermission= (Role,Read,Add,Edit,Delete)=>{
    return {
      type:"permission",role:Role,read:Read,add:Add,edit:Edit,delete:Delete
    };
    }