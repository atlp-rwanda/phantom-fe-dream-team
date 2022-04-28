
import { resetReducer } from "../../../redux/reducers/resetReducers";
import { resetActionType } from "../../../redux/constants/resetActionType";
import { resetAction } from "../../../redux/actions/resetAction";

describe("reset", () => {

    let initialState
  beforeEach(()=>{
    initialState = [
      {
        email:'andela1@gmail.com', 
      },
    
    ];

  });

  it("should return the initialState", () => {
    const reducer = resetReducer(undefined, {});
    expect([reducer]).toEqual(initialState);
  });

  
  

});
