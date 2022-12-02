import React from 'react'
import Logged from './Logged';
import NotLogged from './notLogged';

const Main = ({isLoggedin}) => {
  return (
    <div>
        {isLoggedin ? <Logged /> : <NotLogged />}
    </div>
  )
}

export default Main