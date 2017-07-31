import React, { PureComponent } from 'react'
import { WX_AUTH } from 'constants/router'
import { GET_USERINFO } from 'constants/api'
import { get } from 'assets/js/request'
import { LoadMore } from 'react-weui'
import URI from 'urijs'
import 'weui'
import './index.scss'

import createStore from './store'
import RouteTree from './router'


class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            store: null,
            initState: null,
        }
    }

    componentWillMount() {
        const { code } = new URI().query(true)
        if (!code) {
            location.href = WX_AUTH
        }
    }

    componentDidMount() {
        this.initState()
    }

    async initState() {
        const { code } = new URI().query(true)

        let initState = {}

        try {
            initState = {
                userInfo: await get(GET_USERINFO, { code }),
            }
        } catch (error) {
            return
        }

        const store = createStore(initState)

        this.setState({ initState, store })
    }

    render() {
        const { initState, store } = this.state
        if (!initState || !store) {
            return <LoadMore loading>loading...</LoadMore>
        }
        return (
            <RouteTree store={store} indexPath="/index" />
        )
    }
}

export default App
