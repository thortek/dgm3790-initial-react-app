import React from 'react'
import { Route, Switch } from 'react-router-dom'
//import './App.css'
import SenatorList from './views/SenatorList'
import RepresentativeList from './views/RepresentativeList'
import Layout from './components/Layout'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='App'>
      <Layout />
      <Switch>
        <Route path='/senate' component={SenatorList}/>
        <Route path='/house' component={RepresentativeList} />
        <Route path='/' exact component={Welcome} />
      </Switch>
    </div>
  )
}

export default App
