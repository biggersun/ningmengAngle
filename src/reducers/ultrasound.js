import * as actionTypes from 'constants/actionTypes'

const initState = {
    fuck: 'adsd',
}

export default function getUltrasound(state = initState, { type, }) {
    switch (type) {
    case actionTypes.GET_ULTRASOUND_LIST:
        return {
            ...state,
            fuck: 'asdas',
        }
    default:
        return state
    }
}
