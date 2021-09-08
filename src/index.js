import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppFooter from './AppFooter'
import AppContent from './AppContent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Мой первый сайт!!!</h1>
          <AppContent />
        </div>

        <AppFooter />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
