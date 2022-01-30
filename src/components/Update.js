import React,{useState} from 'react';
import Select from 'react-select';
;

const Update = () => {
    const options=[
        {value:"1Vomito",label:"1Vomito"},
        {value:"Diarrea",label:"Diarrea"},
        {value:"3Gripa",label:"3Gripa"},
        {value:"Dolor cabeza",label:"Dolor cabeza"},
        {value:"Malestar",label:"Malestar"},
        {value:"Dolor huesos",label:"Dolor huesos"},
        {value:"Asma",label:"Asma"},
        {value:"covid",label:"covid"},
        {value:"Corazon",label:"Corazon"},
        {value:"Tos",label:"Tos"},
        {value:"cancer",label:"cancer"},
        {value:"Ebola",label:"Ebola"}
    ];
    const [selectedOption, setselectedOption] = useState(null);

    const handleChange=(selectedOption)=>{
        setselectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    }
    
  return <div>
      <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="illnesses"
          options={options}
          onChange={handleChange}
        />
  </div>;
};

export default Update;
