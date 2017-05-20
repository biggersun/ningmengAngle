import React from 'react'
import PropTypes from 'prop-types'
import { Provider, } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory, } from 'react-router'
import { syncHistoryWithStore, } from 'react-router-redux'
import { relativeToRoot, } from 'assets/js/util'

import App from '../containers/App'
import Ultrasound from '../containers/Ultrasound'
import Article from '../containers/Article'
import TimeTable from '../containers/TimeTable'

export default function RouteTree({ store, indexPath, }) {
    const history = syncHistoryWithStore(hashHistory, store)
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRedirect to={relativeToRoot(indexPath)} />
                    <Route path="ultrasound" component={Ultrasound} />
                    <Route path="airticle" component={Article} />
                    <Route path="timeTable" component={TimeTable} />
                </Route>
            </Router>
        </Provider>
    )
}

RouteTree.propTypes = {
    store: PropTypes.object.isRequired,
    indexPath: PropTypes.string.isRequired,
}
