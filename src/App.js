import React, {Component} from 'react';

import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './components/ProductData';
import { FaHeartbeat } from "react-icons/fa";
import ProductPreview from './components/ProductPreview';
import ProductDetails from './components/ProductDetails';
import Topbar from './components/Topbar';


class App extends Component{
state ={
  productData: ProductData,
  currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
  showHeartBeatSection: false,
}


  render(){
 return (
    <div className="App">      
        <Topbar />
         <div className={classes.MainContainer}>
             <div className={classes.ProductPreview}>
              <ProductPreview currentPreviewImage={this.state.currentPreviewImage}
              showHeartBeatSection={this.state.showHeartBeatSection} />
              </div>

             <div className={classes.ProductData}>
             <ProductDetails data={this.state.productData} />
             </div>
          </div>
      
    </div>
  )
}
}
export default App;
