export const initialState = {
    user: null
};

const reducer = (state, action) => {

    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state, 
                user: action.user
            }
            break;

        default:
            return state;
            
    }
};

export default reducer;