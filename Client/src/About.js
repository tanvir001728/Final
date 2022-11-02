import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './About.css';
// import Image from './img/Medicine.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = ()=>{
    const [item, setItem]= React.useState({About:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})
    return(
        <div>
        <Navbar/>
        <div class="card">
        </div>
       
        <div class="card-text">
        <p class="para">Med-Api</p>
            <div class="card-body">
        <p class="paragraph">{item.About}</p>
            </div>
        </div>
        
        <Footer />
        </div>
    )
}
export default About;
