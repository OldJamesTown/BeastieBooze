// table of contents
// render all of our different views
// view switcher - main, single drink, create, profile, login/signup buttons, search bar


import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Create from './Create'
import Feed from './Feed'
import DrinkView from './DrinkView'

const App = () => {

  //* not doing anything yet, but I reckon we'll wanna keep track of whether the user is
  //* logged in and adjust our views accordingly
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  
  //* using react router to conditionally render views. We'll add more as we go
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route path='/drink/:drinkId'>  //* takes a param and dynamically renders a drinkView
          <DrinkView />                 //* according to the drinkId passed in from the DrinkTile component
        </Route>
      </Switch>
    </div> 
  )

}

export default App