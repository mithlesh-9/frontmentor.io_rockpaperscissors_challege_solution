import scoreActionTypes from './score-type';

const INITIAL_STATE = {
    score: 0
}


const scoreReducer = (state  = INITIAL_STATE ,action) => {
    switch (action.type) {
        case scoreActionTypes.GET_SCORE:
            return state;
        
        case scoreActionTypes.INCREMENT_SUCCESS:
            const score = state.score + 1;
            return {
                ...state,
                score
            }
        
        case scoreActionTypes.DECREMENT_SUCCESS:
            let newScore = state.score - 1;
            if(newScore <= 0 ) {
                newScore = 0;
            }
            return {
                ...state,
                score: newScore
            }
            
            
    
        default:
            return state;
    }


};


export default scoreReducer;

