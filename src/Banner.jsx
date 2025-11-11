import {useState} from 'react';

const Banner=()=>{

    const [ban,setBan]=useState(true)

    return(
        <div className="banner">

            {ban?<img src="giphy.gif"/>:<img src="banner.gif"/>}

        </div>
        )
    }
export default Banner;