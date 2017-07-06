import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function growthList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_GROWTH: {
        return {
            ...state,
            ...payload,
        }
    }
    case actionTypes.TAB_SWITCH: {
        return {
            ...state,
            tabId: payload,
        }
    }
    default:
        return state
    }
}
