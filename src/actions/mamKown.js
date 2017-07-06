import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get } from 'assets/js/request'
import { actionCreator } from 'assets/js/util'

const renderIndex = actionCreator(actionTypes.FIND_MAM)

export function fetchMamList(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_MAM, params)
        } catch (e) {
            return
        }
        dispatch(renderIndex(payload))
    }
}

