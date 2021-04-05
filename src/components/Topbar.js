import React from 'react';
import classes from './Topbar.module.css'

const Topbar = () => {
    return(
        <header >
         <nav className={classes.Topbar}>
          <img src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="Amazon" />
         </nav>
        </header>
    )
}

export default Topbar;