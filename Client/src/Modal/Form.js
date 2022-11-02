import React from 'react';
import './Form.css';
import {useContext, useState} from 'react';

export const Form = () => {
  const [name, setname] = useState("");
  const [strength, setstrength] = useState("");
  const [company, setcompany] = useState("");
  const [generic_name, setgeneric_name] = useState("");
  const [price, setprice] = useState("");
  const [indication, setindication] = useState("");
  const [description, setdescription] = useState("");
  const [doses, setdoses] = useState("");
  const [precautions, setprecautions] = useState("");
  const [side_effect, setside_effect] = useState("");
  let handleSubmit = async (e) => {

    let data={"name": name,
    "strength": strength,
    "generic_name": generic_name,
    "description": description,
    "side_effect": side_effect,
    "doses": doses,
    "precautions": precautions,
    "indication": indication,
    "price": price,
    "company":company

};
    
    fetch("/addmedicine", {
    method: "POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => res.json());  

  };
  return (
    <form>
      <h1>Add Medicine</h1>
      <div className='form-body'>
        <div className='form-col'>
          <div className="form-group">
            <label >Drug name</label>
            <input className="form-control" id="drug-name" onChange={(e) => setname(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Drug Generic name</label>
            <input className="form-control" id="drug-generic-name" onChange={(e) => setgeneric_name(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Strength</label>
            <input className="form-control" id="strength" onChange={(e) => setstrength(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Manufacturer</label>
            <input className="form-control" id="manufacturer" onChange={(e) => setcompany(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Unit Price</label>
            <input className="form-control" id="unit-price" onChange={(e) => setprice(e.target.value)}/>
          </div>
        </div>
        <div className='form-col'>
          <div className="form-group">
            <label >Indication</label>
            <input className="form-control" id="indication" onChange={(e) => setindication(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Description</label>
            <input className="form-control" id="description" onChange={(e) => setdescription(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Doses</label>
            <input className="form-control" id="doses" onChange={(e) => setdoses(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Side Effects</label>
            <input className="form-control" id="side-effects" onChange={(e) => setside_effect(e.target.value)}/>
          </div>
          <div className="form-group">
            <label >Precaution</label>
            <input className="form-control" id="precaution" onChange={(e) => setprecautions(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="form-group modal-button">
        <button type="button" class="btn me-auto" data-bs-dismiss="modal">Close</button>
        <button className="form-control btn btn-primary " type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
