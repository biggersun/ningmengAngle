import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get, } from 'assets/js/request'
import { actionCreator, } from 'assets/js/util'

const renderCannotEat = actionCreator(actionTypes.FIND_EAT)
const renderCannotEat2 = actionCreator(actionTypes.FIND_EAT2)

export function fetchFoodType(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_EAT, params)
        } catch (e) {
            return
        }
        dispatch(renderCannotEat(payload))
    }
}

export function fetchFoodContent(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_EAT2, params)
        } catch (e) {
            return
        }
        dispatch(renderCannotEat2(payload))
    }
}

