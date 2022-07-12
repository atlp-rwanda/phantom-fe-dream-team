  export const updateProfile = (username,email,phone)=>{
    return {
      type: "UPDATE", Username:username, Email:email,Phone:phone
    };
  }
  export const changePassword = (Opassword,Npassword)=>{
    return {
      type: "CHANGE", OldPassword:Opassword,NewPassword:Npassword
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
export const addBus= (bus)=>{
    return {
      type:"AddBus",BUS:bus
};
} 
  export const deleteBus= (Id)=>{
    return {
      type:"DeleteBus",ID:Id
    };
    }  