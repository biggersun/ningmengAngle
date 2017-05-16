import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function getUltrasound(state = initState, { type, payload, }) {
    switch (type) {
    case actionTypes.GET_VALUE:
        return {
            ...state,
            ...payload,
        }
    case actionTypes.GET_CONTENT:
        return {
            ...state,
            ...payload,
        }
    default:
        return state
    }
}
