import React from 'react';
import firebaseapp from '../config/firebase-config';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const auth = getAuth(firebaseapp);
const Data = () => {
  return (
  <div>hola</div>
  );
};

export default Data;
