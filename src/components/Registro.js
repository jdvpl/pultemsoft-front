import {Link} from 'react-router-dom';
import Logo from '../pultemsoft.png';
const Registro = () => {
  return  <div >
  <section >
<div className="container-fluid py-5 h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col col-xl-10">
      <div className="card border_radius_1" >
        <div className="row g-0">
          
          <div className="col-md-6 col-lg-7 d-flex align-items-center">
            <div className="card-body p-4 p-lg-5 text-black">
              <form>
                <div className="d-flex align-items-center mb-3 pb-1">
                  <i className="fas fa-cubes fa-2x me-3 fa-color" ></i>
                  <span className="h1 fw-bold mb-0 text-center">
                    <img src={Logo} alt="pultemsoft" className="img-fluid w-50"/>
                  </span>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form2Example17" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form2Example17">Nombre</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form2Example17" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form2Example17">Cedula</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="form2Example17" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form2Example17">Correo</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form2Example27" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form2Example27">Contraseña</label>
                </div>
                <div className="pt-1 mb-4 d-grid mx-5">
                  <button className="btn btn-green btn-lg btn-block" type="button">Registrame</button>
                </div>
                <p className="mb-5 pb-lg-2 dn-account text-center" >Ya tienes cuenta? <Link to="/">Iniciar sesion</Link></p>
              </form>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 d-none d-md-block">
            <img
              src="https://www.ehcos.com/wp-content/uploads/2017/11/dia-mundial-ux-900x550.jpg"
              alt="login form"
              className="img-fluid logo_radius" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</div>;
};

export default Registro;
