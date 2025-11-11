import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Components from './Components.jsx';
import WomenComp from './WomenComp.jsx';
import Footer from './Footer.jsx';
import {Men,Women} from './object.js';
import {useState} from 'react';

const Main=()=>{

    const [men,setMen]=useState(Men)
    const [women,setWomen]=useState(Women)

    return(
        <div>
         <Header/>
         <Banner/>
         <Components gents={men}/>
         <WomenComp women1={women}/>
         <Footer/>
        </div>
        )
    }
export default Main;