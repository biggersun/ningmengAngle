import React from 'react'
import PropTypes from 'prop-types'
import { Provider, } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, } from 'react-router'
import { syncHistoryWithStore, } from 'react-router-redux'
import { relativeToRoot, } from 'assets/js/util'

import App from '../containers/App'
import Ultrasound from '../containers/Ultrasound'
import Article from '../containers/Article'

export default function RouteTree({ store, indexPath, }) {
    const history = syncHistoryWithStore(browserHistory, store)
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRedirect to={relativeToRoot(indexPath)} />
                    <Route path="ultrasound" component={Ultrasound} />
                    <Route path="airticle" component={Article} />
                </Route>
            </Router>
        </Provider>
    )
}

RouteTree.propTypes = {
    store: PropTypes.object.isRequired,
    indexPath: PropTypes.string.isRequired,
}
