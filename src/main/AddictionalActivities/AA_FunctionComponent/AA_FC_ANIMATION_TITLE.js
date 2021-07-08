import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import WebSettings from '../../../data/webSettings.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const AA_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos="fade-left" data-aos-offset='500' data-aos-duration="1000">
                <div className={ WebSettings[0].blueTitle }>{ Data[4].title }</div>
                <div className={ `${WebSettings[0].orangeBar} w-70` }></div>
            </div>
        </Fragment>
    );
};

export default AA_FC_ANIMATION_TITLE;