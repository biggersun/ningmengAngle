import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function getUltrasound(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.GET_PTPOINT:
        return {
            ...state,
            ...payload,
        }
    case actionTypes.GET_PTCONTENT:
        return {
            ...state,
            ...payload,
        }
    default:
        return state
    }
}
