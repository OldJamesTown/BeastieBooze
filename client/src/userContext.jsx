import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext();

function UserContextProvider({children}) {
  const [userInfo, setUserInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const loginUser = (userData) => {


    axios.get('/')

    
  }

  const userProps = {
    userInfo,
    loginUser,
    isLoggedIn,
  }

  return (
    <UserContext.Provider value={userProps}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContextProvider, UserContext}