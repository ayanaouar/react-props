import React from 'react'
import Adress from './Profile/Adress';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto';
import './App.css';

const App2 = () => {
  return (
    <div className='App-header'> 
        <ProfilePhoto/>
        <div >
        <FullName/>
        <Adress/>
        </div>

    </div>
  )
}

export default App2