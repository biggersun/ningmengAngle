import * as actionTypes from 'constants/actionTypes'

const initState = {}

export default function mamKownList(state = initState, { type, payload }) {
    switch (type) {
    case actionTypes.FIND_MAM: {
        const { content = [] } = payload
        const type1 = content.filter(item => item.type_ === '备孕')
        const type2 = content.filter(item => item.type_ === '怀孕')
        const type3 = content.filter(item => item.type_ === '育儿')
        let tabList1 = new Set()
        let tabList2 = new Set()
        let tabList3 = new Set()
        let dataArr1 = {}
        let dataArr2 = {}
        let dataArr3 = {}
        type1.forEach((item) => {
            tabList1.add(item.name)
            dataArr1[item.name] = type1.filter(item2 => item2.name === item.name)
        })
        type2.forEach((item) => {
            tabList2.add(item.name)
            dataArr2[item.name] = type2.filter(item2 => item2.name === item.name)
        })
        type3.forEach((item) => {
            tabList3.add(item.name)
            dataArr3[item.name] = type3.filter(item2 => item2.name === item.name)
        })
        tabList1 = Array.from(tabList1)
        tabList2 = Array.from(tabList2)
        tabList3 = Array.from(tabList3)
        dataArr1 = Object.entries(dataArr1).map(([ key, value ]) => ({
            title: key,
            list: value,
        }))
        dataArr2 = Object.entries(dataArr2).map(([ key, value ]) => ({
            title: key,
            list: value,
        }))
        dataArr3 = Object.entries(dataArr3).map(([ key, value ]) => ({
            title: key,
            list: value,
        }))
        return {
            ...state,
            mamDataList: {
                dataList1: {
                    data: dataArr1,
                    tabList: tabList1,
                },
                dataList2: {
                    data: dataArr2,
                    tabList: tabList2,
                },
                dataList3: {
                    data: dataArr3,
                    tabList: tabList3,
                },
            },
        }
    }
    default:
        return state
    }
}
