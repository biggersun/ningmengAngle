import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function growthList(state = initState, { type, payload, }) {
    switch (type) {
    case actionTypes.FIND_GROWTH: {
        return {
            ...state,
            ...payload,
        }
    }
    default:
        return state
    }
}
