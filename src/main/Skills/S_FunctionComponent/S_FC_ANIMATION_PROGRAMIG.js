import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import WebSettings from '../../../data/webSettings.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const S_FC_ANIMATION_TITLE = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade-left' data-aos-duration='1000'>
                <div className={ WebSettings[0].blueTitle }>{ Data[5].title }</div>
                <div className={ `${WebSettings[0].orangeBar} w-18` }></div>
            </div>
        </Fragment>
    );
};

export default S_FC_ANIMATION_TITLE;