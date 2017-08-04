import React, { PureComponent } from 'react'
import { GET_WXAUTH, GET_USERINFO } from 'constants/api'
import { WX_AUTH_URL } from 'constants/router'
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
        const uriS = new URI()
        const uri = new URI(WX_AUTH_URL)
        uri.setQuery({
            redirect_uri: uriS.toString(),
        })

        const { code } = uriS.query(true)
        if (!code) {
            location.href = uri.toString()
        }
    }

    componentDidMount() {
        this.initState()
    }

    async initState() {
        const { code } = new URI().query(true)
        const params = {
            code,
        }
        let initState = {}

        try {
            initState = {
                userInfo: await get(GET_USERINFO, params),
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
