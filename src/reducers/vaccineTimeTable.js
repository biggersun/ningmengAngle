import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function vaccineTimeTable(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_VACCINETEST:
        return {
            ...state,
            ...payload,
        }
    default:
        return state
    }
}
