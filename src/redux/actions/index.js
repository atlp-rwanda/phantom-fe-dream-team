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
  export const setPermission= (NPermissions,Id)=>{
    return {
      type:"UpdatePermission",permissions:NPermissions,ID:Id
    };
    }
  export const deleteRole= (Id)=>{
      return {
        type:"DeleteRole",ID:Id
      };
      }
export const addRole= (role)=>{
        return {
          type:"AddRole",ROLE:role
    };
  }    