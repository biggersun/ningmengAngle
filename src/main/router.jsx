import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { relativeToRoot } from 'assets/js/util'

import App from 'containers/App'
import Index from 'containers/Index'
import IndexArt from 'containers/IndexArt'
import Ultrasound from 'containers/Ultrasound'
import Article from 'containers/Article'
import PTcontent from 'containers/PTcontent'
import TimeTable from 'containers/TimeTable'
import VaccineTimeTable from 'containers/VaccineTimeTable'
import VaccineContent from 'containers/VaccineContent'
import CannotEat from 'containers/CannotEat'
import FoodList from 'containers/FoodList'
import FoodContent from 'containers/FoodContent'
import Growth from 'containers/Growth/index'
import GrowthList from 'containers/Growth/list'
import MamKown from 'containers/MamKown'
import MamAircles from 'containers/MamAircles'

export default function RouteTree({ store, indexPath }) {
    const history = syncHistoryWithStore(hashHistory, store)
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRedirect to={relativeToRoot(indexPath)} />
                    <Route path="index" component={Index} />
                    <Route path="indexArt" component={IndexArt} />
                    <Route path="ultrasound" component={Ultrasound} />
                    <Route path="airticle" component={Article} />
                    <Route path="timeTable" component={TimeTable} />
                    <Route path="ptcontent" component={PTcontent} />
                    <Route path="vaccine" component={VaccineTimeTable} />
                    <Route path="vaccineContent" component={VaccineContent} />
                    <Route path="cannotEat" component={CannotEat} />
                    <Route path="foodList" component={FoodList} />
                    <Route path="foodContent" component={FoodContent} />
                    <Route path="growth" component={Growth}>
                        <IndexRedirect to="list" />
                        <Route path="list" component={GrowthList} />
                    </Route>
                    <Route path="mamKown" component={MamKown} />
                    <Route path="mamAircles" component={MamAircles} />
                </Route>
            </Router>
        </Provider>
    )
}

RouteTree.propTypes = {
    store: PropTypes.object.isRequired,
    indexPath: PropTypes.string.isRequired,
}
