import React from 'react'
import valeursAgiles from '../images/ValeursAgiles.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
        <>
        <img src={valeursAgiles} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <Link to="/valeursAgiles">Découvrir les valeurs agiles</Link>
        </>
  )
}

export default Home
