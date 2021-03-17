import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }
  const all = store.getState().good + store.getState().ok + store.getState().bad
  const average = (store.getState().good - store.getState().bad) / all
  const positive = (store.getState().good / all * 100) + " %"


  const Statistics = () => {
    if (all === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <table>
        <tbody>
          <tr><td>good</td> <td>{store.getState().good}</td></tr>
          <tr><td>neutral </td><td>{store.getState().ok}</td></tr>
          <tr><td>bad</td><td>{store.getState().bad}</td></tr>
          <tr><td>all</td><td>{all}</td></tr>
          <tr><td>average</td><td>{average}</td></tr>
          <tr><td>positive</td><td>{positive}</td></tr>
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={good}>good</button>
      <button onClick={ok}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <h1>statistics</h1>
        <Statistics />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)