import React from 'react';
import firebaseapp from '../config/firebase-config';
import {getAuth,signOut} from 'firebase/auth';
import Navbar from './Navbar';
import Salud from '../salud.jpeg';
import Map from './Maps';

const auth = getAuth(firebaseapp);

const Data = ({data}) => {
  
 const {name,email,document,lat,lng,illnesses,status,eps}=data;

  return (
  <div >
  <Navbar button={
  <button onClick={()=>signOut(auth)}
    className="btn-green btn"
   >Cerrar sesion</button>}
    name={data.name}
   />

<div className="container mt-3">
<div className="card">
  <h5 className="card-header">{name}</h5>
  <div className="card-body">
    <h5 className="card-title text-center"> Mi informacion: </h5>
  <div className="row">

  <div className="col-md-4">
  <img src={Salud} alt="Generic placeholder image" className="img-fluid w-sm-50" />
  </div>
   
      <div className="col-md-4">
      <h5>Documento</h5>
      <p>{document}</p>
      <h5>Correo</h5>
      <p>{email}</p>
      <h5>Eps</h5>
      <p>{eps}</p>
        <h5>Sintomas</h5>
        <h6>
      {
        illnesses
      }
        </h6>
      {status}
       
      </div>
      <div className="col-md-4">
      
      <h5>Latitud</h5>
        <p>
        {lat}
        </p>
      <h5>Longitud</h5>
        {lng}
      </div>
    </div>

  </div>
</div>

<div className="row my-3">
  <div className="col-md-6 col-sm-12">
  <Map
    latitud={lat}
    longitud={lng}
   />
  </div>
  <div className="col-md-6"></div>
</div>
</div>




   
  </div>

  );
};

export default Data;
