import React, { PureComponent } from 'react'
import { GET_WXAUTH } from 'constants/api'
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

    componentDidMount() {
        this.initState()
    }

    async initState() {
        console.log(new URI().toString())
        const cbUrl = new URI().toString()

        let initState = {}

        try {
            initState = await get(GET_WXAUTH, { url: cbUrl })
        } catch (error) {
            console.log(error)
            // return
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
