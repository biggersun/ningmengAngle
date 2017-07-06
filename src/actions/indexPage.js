import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderIndex = actionCreator(actionTypes.FIND_ART)
const renderIndex2 = actionCreator(actionTypes.FIND_ART2)

export function fetchArt(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_ART, params)
        } catch (e) {
            return
        }
        dispatch(renderIndex(payload))
    }
}

export function fetchArtContent(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_ART2, params)
        } catch (e) {
            return
        }
        dispatch(renderIndex2(payload))
    }
}

