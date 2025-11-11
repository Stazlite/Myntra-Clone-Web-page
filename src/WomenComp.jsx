const WomenComp=(props)=>{

    const {title,image1,image2,image3}=props.women1;

    return(
        <div>
            <div className="women"/>
            <h2>{title}</h2>
            <div className="women-images">
                <img src={image1}/>
                <img src={image2}/>
                <img src={image3}/>
            </div>
        </div>
        )
    }
export default WomenComp;