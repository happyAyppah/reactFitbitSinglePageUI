import React, { Component } from 'react';

import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './components/ProductData';
import ProductPreview from './components/ProductPreview';
import ProductDetails from './components/ProductDetails';
import Topbar from './components/Topbar';


class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagepos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState(
      {
        currentPreviewImagepos: pos
      }
    )
  }

  onFeatureItemClick = (pos) => {

    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }

    this.setState({
      currentSelectedFeature: pos
    })
  }


  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagepos].imageUrl}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagepos={this.state.currentPreviewImagepos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>

        </div>

      </div>
    )
  }
}
export default App;
