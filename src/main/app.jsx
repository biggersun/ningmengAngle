import React, { PureComponent, } from 'react'
import createStore from './store'
import RouteTree from './router'

import WeUI from 'react-weui'

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
            return <div>loading</div>
        }
        return (
            <RouteTree store={store} indexPath="/ultrasound" />
        )
    }
}

export default App
