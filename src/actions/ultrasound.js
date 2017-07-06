import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderValue = actionCreator(actionTypes.GET_VALUE)
const renderContent = actionCreator(actionTypes.GET_CONTENT)

export function fetchValue(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_VALUE, params)
        } catch (e) {
            return
        }
        dispatch(renderValue(payload))
    }
}

export function fetchContent(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_CONTENT, params)
        } catch (e) {
            return
        }
        dispatch(renderContent(payload))
    }
}

