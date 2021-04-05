import React from 'react';
import classes from './ProductPreview.module.css';
import { FaHeartbeat } from "react-icons/fa";


    const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    
    return(
        <div className={classes.ProductPreview} >
            <img src={props.currentPreviewImage} alt="Product Preview" />

    {
    props.showHeartBeatSection ?
      <div className={classes.HeartBeatSection}>
        <FaHeartbeat className={classes.HeartBeatSections}></FaHeartbeat>
        <p>78</p> 
      </div>
    :
      <div className={classes.TimeSection}>
        <p>{`${currentHour}:${currentMinutes}`}</p>
      </div>
    }

        </div>
    )
}

export default ProductPreview