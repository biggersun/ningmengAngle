import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
    AppContainer,
} from 'react-hot-loader'
import App from './app'

injectTapEventPlugin()

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('app-container')
    )
}

render()

if (module.hot) {
    module.hot.accept('./app', render)
}
