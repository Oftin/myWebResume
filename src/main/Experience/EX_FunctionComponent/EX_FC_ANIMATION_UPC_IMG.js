import React, { Fragment, useEffect } from 'react';
import SupportIMG from '../../../img/Support.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const EX_FC_ANIMATION_UPC_IMG = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <Fragment>
            <div data-aos='fade' data-aos-offset='350' data-aos-duration='1000' data-aos-delay='2000'>
                <img className='row-start-1 row-span-1 h-40' src= { SupportIMG } alt=''/>
            </div>
        </Fragment>
    );
};

export default EX_FC_ANIMATION_UPC_IMG;