import  {createStore} from "redux";

const setmembershipCol = {
    membershipCol:"gold",
};

function reducer(state=setmembershipCol,action){
    // console.log("sdfghjk");
    // console.log(state);
    // console.log(action);
    return state;
}

export const store = createStore(reducer);