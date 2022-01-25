import React, { useState,useEffect } from 'react';

import Login from './Login';
import Data from './Data';
import firebaseapp from '../config/firebase-config';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(firebaseapp);


const Home = () => {

  const [user, setuser] = useState(null);

  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setuser(usuarioFirebase)
    }else{
      setuser(null);
    }
  })


  return (
    <div>
    {user ? <Data/> : <Login/>}
    </div>
  );
};

export default Home;
