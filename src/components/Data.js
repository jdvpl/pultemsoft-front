import React from 'react';
import firebaseapp from '../config/firebase-config';
import {getAuth,signOut} from 'firebase/auth';
import Navbar from './Navbar';
import Salud from '../salud.jpeg';
import Map from './Maps';

const auth = getAuth(firebaseapp);

const Data = ({data}) => {
  
 const {name,email,document,lat,lng}=data;
  return (
  <div>
  <Navbar button={
  <button onClick={()=>signOut(auth)}
    className="btn-green btn"
   >Cerrar sesion</button>}
    name={data.name}
   />

<section className="section_data" >
  <div className="container py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-md-9 col-lg-7 col-xl-5">
        <div className="card radius_card" >
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src={Salud} alt="Generic placeholder image" className="img-fluid img_profile" />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{name}</h5>
                <p className="mb-2 pb-1 name_data" >{document}</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2 illneses" >
                  <div className="px-3">
                    <p className="small text-muted mb-1">latitud</p>
                    <p className="mb-0">{lat}</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Longitud</p>
                    <p className="mb-0">{lng}</p>
                  </div>
             
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="row container">
  <div className="col-md-6">
  <Map
    latitud={lat}
    longitud={lng}
   />

  </div>
  <div className="col-md-6"></div>
</div>
   
  </div>

  );
};

export default Data;
