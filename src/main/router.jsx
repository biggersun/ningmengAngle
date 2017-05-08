import React from 'react'
import PropTypes from 'prop-types'
import { Provider, } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, } from 'react-router'
import { syncHistoryWithStore, } from 'react-router-redux'
import * as router from 'constants/router'
import { relativeToRoot, } from 'assets/js/util'

import App from '../containers/App'
import Ultrasound from '../containers/Ultrasound'

export default function RouteTree({ store, }) {
    const history = syncHistoryWithStore(browserHistory, store)

    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="ultrasound" component={Ultrasound} />
            </Router>
        </Provider>
    )
}

RouteTree.propTypes = {
    store: PropTypes.object.isRequired,
}
