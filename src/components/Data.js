import React from 'react';
import firebaseapp from '../config/firebase-config';
import {getAuth,signOut} from 'firebase/auth';
const auth = getAuth(firebaseapp);
const Data = () => {
  console.log(auth.lastNotifiedUid);
  return (
  <div>

    <button onClick={()=>signOut(auth)} >Cerrar sesion</button>

  </div>

  );
};

export default Data;
