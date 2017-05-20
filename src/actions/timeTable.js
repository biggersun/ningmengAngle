import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get, post, } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderTable = actionCreator(actionTypes.GET_PTPOINT)
const renderContent = actionCreator(actionTypes.GET_PTCONTENT)

export function fetchPTPoint(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_PTPOINT, params)
        } catch (e) {
            return
        }
        dispatch(renderTable(payload))
    }
}

export function fetchContent(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_PTCONTENT, params)
        } catch (e) {
            return
        }
        dispatch(renderContent(payload))
    }
}

