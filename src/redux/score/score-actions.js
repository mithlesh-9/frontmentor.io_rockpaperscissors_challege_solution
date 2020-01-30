import scoreActionTypes from './score-type';


export const increment = () => {
    return {
        type: scoreActionTypes.INCREMENT
    }
}

export const incrementSuccess = () => {
    return {
        type: scoreActionTypes.INCREMENT_SUCCESS
    }
}

export const decrement = () => {
    return {
        type: scoreActionTypes.DECREMENT
    }
}

export const decrementSuccess = () => {
    return {
        type: scoreActionTypes.DECREMENT_SUCCESS
    }
}