import React, { PureComponent, } from 'react'
import { LoadMore, } from 'react-weui'
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

    initState() {
        const initState = {
            ultrasound: {},
        }

        const store = createStore(initState)

        setTimeout(() => {
            this.setState({ initState, store, })
        }, 500)
    }

    render() {
        const { initState, store, } = this.state
        if (!initState || !store) {
            return <LoadMore loading>loading...</LoadMore>
        }
        return (
            <RouteTree store={store} indexPath="/index" />
        )
    }
}

export default App
