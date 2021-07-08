import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import WebSettings from '../../../data/webSettings.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EX_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos="fade-left" data-aos-offset='500' data-aos-duration="1000" >
                <div className={ WebSettings[0].blueTitle }>{ Data[2].title }</div>
                <div className={ `${WebSettings[0].orangeBar} w-38` }></div>
            </div>
        </Fragment>
    );
};

export default EX_FC_ANIMATION_TITLE;