import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import App from './components/App'


document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(
        <Router>
        <div>
            <App />
        </div>
        </Router>,
        document.getElementById('app')
    )
})