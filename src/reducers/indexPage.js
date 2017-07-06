import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function indexPageArtList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_ART: {
        const { content, imagePaths } = payload
        return {
            ...state,
            content1: content,
            imagePaths,
        }
    }
    case actionTypes.FIND_ART2:
        return {
            ...state,
            ...payload,
        }
    default:
        return state
    }
}
