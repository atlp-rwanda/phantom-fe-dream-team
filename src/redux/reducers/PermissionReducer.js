import { act } from "react-dom/test-utils";
const AdminP=[localStorage.getItem('Read1'),localStorage.getItem('Add1'),localStorage.getItem('Edit1'),localStorage.getItem('Delete1')]
const OperatorP=[localStorage.getItem('Read2'),localStorage.getItem('Add2'),localStorage.getItem('Edit2'),localStorage.getItem('Delete2')]
const DriverP=[localStorage.getItem('Read3'),localStorage.getItem('Add3'),localStorage.getItem('Edit3'),localStorage.getItem('Delete3')]

const PermissionReducer = (state=[AdminP,OperatorP,DriverP], action) => {
    const Role= action.role
    const Read= action.read
    const Edit= action.edit
    const Add= action.add
    const Delete= action.delete

  switch (action.type) {
    case "permission" :
        if(Role=='Admin'){
        localStorage.setItem('Read1',Read)
        localStorage.setItem('Add1',Add)
        localStorage.setItem('Edit1',Edit)
        localStorage.setItem('Delete1',Delete)
    }
    else if(Role=='Operator'){
        localStorage.setItem('Read2',Read)
        localStorage.setItem('Add2',Add)
        localStorage.setItem('Edit2',Edit)
        localStorage.setItem('Delete2',Delete)
    }
   else if(Role=='Driver'){
        localStorage.setItem('Read3',Read)
        localStorage.setItem('Add3',Add)
        localStorage.setItem('Edit3',Edit)
        localStorage.setItem('Delete3',Delete)
    }
        // localStorage.setItem('Roles',JSON.stringify({Read,Add,Edit,Delete}));
      state=[Role,Read,Add,Edit,Delete]
      return state;
   default:
     return state   
  }
  
  }
  export default PermissionReducer;