import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function vaccineContent(state = initState, { type, payload, }) {
    switch (type) {
    case actionTypes.FIND_VCONTENT:
        return {
            ...state,
            ...payload,
        }
    default:
        return state
    }
}
