import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import './Details.css'

const Details = ()=>{
  let payload={};
  let { id } = useParams();
  
  const [item,setItem]= React.useState({
      name:"",
      strength:"",
      generic_name:"",
      company:"",
      price:"",
      side_effect:"",
      precautions:"",
      indication:""


  });
  fetch('/getmedicine/'+id)
      .then((response)=> response.json())
  .then((data)=>data).then(data =>{
      setItem(data[0]);
      

  })

    return(
       <div>
        <Navbar/>
        <div class="medicine">
            <div class="medicine-description">
              <p class="name">{item.name}</p>
              <p class="medicine-attr">{item.generic_name}</p>
              <p class="medicine-attr">{item.strength}</p>
              <p class="medicine-attr">{item.company}</p>
              <p class="medicine-attr">{item.price} taka</p>
            </div>
            <div>
              <h4 class="med-heading">Indication</h4>
              <p class="description">{item.indication}</p>
              <h4 class="med-heading">SideEffects</h4>
              <p class="description">{item.side_effect}</p>
              <h4 class="med-heading">Description</h4>
              <p class="description">{item.description}</p>
              <h4 class="med-heading">Precautions</h4>
              <div class="description">
              <ul class>
                <li>{item.precautions}</li>
              </ul>
              </div>
            </div>
           </div>

        <Footer />

       </div>   
    )
}
export default Details;