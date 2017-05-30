import * as actionTypes from 'constants/actionTypes'
import * as api from 'constants/api'
import { get, } from 'assets/js/request'
import { actionCreator, } from 'assets/js/util'

const renderVaccineTimeTable = actionCreator(actionTypes.FIND_VACCINETEST)
const renderVaccineContent = actionCreator(actionTypes.FIND_VCONTENT)

export function fetchVaccineTimeTable(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_VACCINETEST, params)
        } catch (e) {
            return
        }
        dispatch(renderVaccineTimeTable(payload))
    }
}

export function fetchVaccineContent(opts = {}) {
    return async (dispatch) => {
        const params = Object.assign({}, opts)
        let payload

        try {
            payload = await get(api.FIND_VCONTENT, params)
        } catch (e) {
            return
        }
        dispatch(renderVaccineContent(payload))
    }
}

