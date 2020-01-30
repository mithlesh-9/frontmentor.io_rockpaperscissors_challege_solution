import userTypes from './user-type';

const INITIAL_STATE = {
    user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.select_shape_success:
            return {
                ...state,
                user: action.payload
            }

        case userTypes.reset_shape_success:
                return {
                    ...state,
                    user: null
                }

            
    
        default:
            return state;
    }
}



export default userReducer;