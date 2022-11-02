import { Form, Button } from "react-bootstrap"

import {useContext, useState} from 'react';



const Editform = ({editinfo}) =>{
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
    let key = {editinfo}
    console.log(key);
    /*
    let medicine_inf = fetch('http://localhost:5000/showOne/'+key)
    .then((resp)=>resp.json()).then((data)=>data)
    console.log(medicine_inf);

    setname(medicine_inf.name);
    setgeneric_name(medicine_inf.generic_name);
    setstrength(medicine_inf.strength);
    setcompany(medicine_inf.company);
    setprice(medicine_inf.price); */


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

        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Generic Name"
                    value={generic_name}
                    onChange={(e) => setgeneric_name(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Strength"
                    value={strength}
                    onChange={(e) => setstrength(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setcompany(e.target.value)}
                   
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Indication"
                    value={indication}
                    onChange={(e) => setindication(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Doses"
                    value={doses}
                    onChange={(e) => setdoses(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Side Effects"
                    value={side_effect}
                    onChange={(e) => setside_effect(e.target.value)}

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Precautions"
                    value={precautions}
                    onChange={(e) => setprecautions(e.target.value)}

                />
            </Form.Group>
            
            
            <Button variant="success" type="submit" onClick={handleSubmit} block>
                Add
            </Button>
        </Form>

     )
}
export default Editform;