import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function foodList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_EAT:
        return {
            ...state,
            ...payload,
        }
    case actionTypes.FIND_EAT2:
        return {
            ...state,
            ...payload,
        }
    case actionTypes.SEARCH_FOOD:
        return {
            ...state,
            ...payload,
        }
    default:
        return state
    }
}
