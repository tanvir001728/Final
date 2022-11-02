import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar'
import SearchbarDropdown from './components/SearchbarDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
import './App.css';

let val="";
function App() {
  const [options, setOptions] = useState([]);
  

  const onInputChange = (event) => {
    if(event.target.value!="undefined"){
    let match = event.target.value.match(/^[a-zA-Z ]*/);
    let match1= event.target.value.match(/\s*/);
    if(match1[0]===event.target.value){
      setOptions([]);
      return;
    }
    if(match[0]===event.target.value){
    
      fetch('getmedicine',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({"name" : event.target.value})
      }).then(res => res.json()).then(data =>{
        
        let payload = data.name;
        if(payload.length<1)
      {
        setOptions(['Sorry! No match found']);
        return;
      }
      const matchedOptions = []
      payload.forEach((item,index)=>{
       
        
        matchedOptions.push(`${item.name}`);

      });
      setOptions(matchedOptions);
      
    }); 
  }
}
  
 
  
   
  }
 


  return (
    <div className="App">
      <Navbar />
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
      <Footer />
    </div>
  );
}

export default App;
