import React, { useState } from 'react';

import {Link} from 'react-router-dom';
import Logo from '../pultemsoft.png';


const Login = () => {

  const OnSubmitHandler=(e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

  }
  return (
    
  <div >
    <section >
  <div className="container-fluid py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card border_radius_1" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://www.elcallejero.co/wp-content/uploads/2019/08/cuida-tu-salud-el-callejero.jpg"
                alt="login form"
                className="img-fluid logo_radius" 
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={OnSubmitHandler}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3 fa-color" ></i>
                    <span className="h1 fw-bold mb-0 text-center">
                      <img src={Logo} alt="pultemsoft" className="img-fluid w-50"/>
                    </span>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="text" id="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Correo</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Contraseña</label>
                  </div>
                  <div className="pt-1 mb-4 d-grid mx-5">
                    <button className="btn btn-green btn-lg btn-block" type="submit">Iniciar sesion</button>
      
                    <div className="google-btn" onClick={()=> console.log("a")}>
                    <div className="google-icon-wrapper ">
                      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google"/>
                    </div>
                    <p className="btn-text"><b>Iniciar con Google</b></p>
                  </div>
                   
                  </div>

                  
                  <p className="mb-5 pb-lg-2 dn-account text-center" >No tienes cuenta? <Link to="/register">Registrate</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>);
};

export default Login;
