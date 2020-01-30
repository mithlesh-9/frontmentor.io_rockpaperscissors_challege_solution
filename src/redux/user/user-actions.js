import userTypes from './user-type';


export const selectUser = user => {
    console.log(user)
    return {
        type: userTypes.select_shape,
        payload: user
    }
}

export const selectUserSuccess = user => {
    return {
        type: userTypes.select_shape_success,
        payload: user
    }
}

export const resetUser = () => {
    return {
        type: userTypes.reset_shape
    }
}


export const resetUserSuccess = () => {
    return {
        type: userTypes.reset_shape_success
    }
}