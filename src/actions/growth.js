import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get, } from 'assets/js/request'
import { actionCreator, } from 'assets/js/util'

const renderGrowth = actionCreator(actionTypes.FIND_GROWTH)

export default function fetchGrowth(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_GROWTH, params)
        } catch (e) {
            return
        }
        dispatch(renderGrowth(payload))
    }
}

