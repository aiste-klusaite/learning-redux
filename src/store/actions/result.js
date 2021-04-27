import * as actionTypes from './actionTypes';

export const saveRes  = (result) => {
    const updatedRes =  result * 2; // galima det ir i reducer logika, bet kur geriau? 
    return {
        type: actionTypes.STORE_RESULT, 
        result: updatedRes
    }
}

export const storeRes  = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveRes(result))
        }, 2000)
    }
}

export const deleteRes  = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
}