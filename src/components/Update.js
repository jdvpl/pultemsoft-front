import React,{useState} from 'react';
import CreatableSelect from "react-select/creatable";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Error from './Error';

const Update = ({id,lat,lng}) => {
    const [error, seterror] = useState(false);
    const [mensajeError, setmensajeError] = useState('');

    const options=[
        {value:"Vomito ",label:"Vomito"},
        {value:"Diarrea ",label:"Diarrea"},
        {value:"Gripa ",label:"Gripa"},
        {value:"Dolor cabeza ",label:"Dolor cabeza"},
        {value:"Malestar ",label:"Malestar"},
        {value:"Dolor huesos ",label:"Dolor huesos"},
        {value:"Asma ",label:"Asma"},
        {value:"covid ",label:"covid"},
        {value:"Corazon ",label:"Corazon"},
        {value:"Tos ",label:"Tos"},
        {value:"cancer ",label:"cancer"},
        {value:"Ebola ",label:"Ebola"}
    ];
    const [selectedOption, setselectedOption] = useState([]);
    const handleChange=(selectedOption)=>{
        setselectedOption(selectedOption);
    }
    const dataTosend=[]
    selectedOption.map( (data)=> dataTosend.push(data["value"]));

    const OnSubmitHandler =(e)=>{
        e.preventDefault();
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Quieres actualizar tu ubicacion actual?',
            text: "Al seleccionar 'Si quiero' el navegador tomara la nueva ubicacion.",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Si quiero!',
            cancelButtonText: 'Solo continuar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                const lattnt=getLatitudAndLongitude();
                if(lattnt.lat != null && lattnt.lng !=null){
                    
                    swalWithBootstrapButtons.fire(
                        'Datos actualizados!',
                        'Tus datos han sidos actualizados',
                        'success'
                    )
                }
            } else if (
              /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
            }
        })

        console.log(dataTosend)
    }

    const getLatitudAndLongitude=()=>{
        let info={
            lat,
            lng
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            info.lat=position.coords.latitude;
            info.lng=position.coords.longitude
        })
        // eslint-disable-next-line no-sequences
        return info;
    }
    console.log(id,lat,lng)
  return <div>
    <form  onSubmit={OnSubmitHandler}>
    {error ? (
        <Error mensaje={mensajeError}/>
        ): null}

      <div className="form-outline mb-4">
      <label className="form-label" htmlFor="illnesses">Selecciona tus sintomas</label>
      <CreatableSelect 
          className="basic-single"
          classNamePrefix="select"
          name="illnesses"
          options={options}
          onChange={handleChange}
          isMulti
          closeMenuOnSelect={false}
          value={selectedOption}
          id="illnesses"
        />
        </div>
        {
            (dataTosend.length>0)? <h5>Sintomas</h5> : ""
        }
        {         
        dataTosend.map((ill) =>
        <li key={ill}>{ill}</li>
        )
        }
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="temp">Temperatura</label>
                <input type="number" id="temp" className="form-control form-control-lg" step="any" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="spo2">Porcentaje de SPO2</label>
                <input type="number" id="spo2" className="form-control form-control-lg" step="any" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="bpm">BPM</label>
                <input type="number" id="bpm" className="form-control form-control-lg" step="any" />
            </div>
            <div className="pt-1 mb-4 text-center">
                <button className="btn btn-green " type="submit">Actualizar</button>
            </div>
      </form>
  </div>;
};

export default Update;
