import React, { Fragment, useEffect } from 'react';
import Data from '../../../data/data.json';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EX_FC_ANIMATION_UPC_COMPANY = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='1000'>
                { Data[3].company }
            </div>
        </Fragment>
    );
};

export default EX_FC_ANIMATION_UPC_COMPANY;