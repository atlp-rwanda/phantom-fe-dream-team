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
  export const deleteBus= (Id)=>{
    return {
      type:"DeleteBus",ID:Id
    };
    }  
  export const deleteRoute= (Id) =>{
    return {
      type: "DeleteRoute", ID:Id
    };
  }

    // export const POST_ROUTES = "POST_ROUTE";
    // export const GET_ALL_ROUTES = "GET_ALL_ROUTE";
    // export const GET_ONE_ROUTE = "GET_ONE_ROUTE";
    // export const UPDATE_ONE_ROUTE = "UPDATE_ONE_ROUTE";
    export const DELETE_ROUTE = "DELETE_ROUTE";