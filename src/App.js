import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './components/ProductData';
import { FaHeartbeat } from "react-icons/fa";



function App() {
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="Amazon" />
        </nav>

        <div className={classes.MainContainer}>

          <div className={classes.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />

            {/* <div className={classes.TimeSection}>
              <p>{`${currentHour}:${currentMinutes}`}</p>
            </div> */}

            <div className={classes.HeartBeatSection}>
              <FaHeartbeat className={classes.HeartBeatSections}></FaHeartbeat>
              <p>78</p>
            </div>
          </div>

          <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
            <p className={classes.ProductDescription}>{ProductData.description}</p>

            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
              <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Red Colored"
              />
              <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="Black Colored"
              />
              <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored"
              />
              <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored"
              />
            </div>

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
              <button className={classes.FeatureItem}>Heart Rate</button>
            </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
