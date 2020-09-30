import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Senators from './Senators'
import RepresentativeList from './RepresentativeList'
import Layout from './components/Layout'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='App'>
      <Layout />
      <Switch>
        <Route path='/senate' component={Senators}/>
        <Route path='/house' component={RepresentativeList} />
        <Route path='/' exact component={Welcome} />
      </Switch>
    </div>
  )
}

export default App
