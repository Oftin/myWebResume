import React, { Component, Fragment } from 'react';
//import H_FC_ANIMATION_IMAGE_VOLCANO from './H_FunctionalComponent/H_FC_ANIMATION_IMAGE_VOLCANO'
import imgHeader from '../img/vulcanSicilia_FHD.jpg';
import flag from '../img/flag_FHD.jpg';

import Data from '../../src/data/data.json';

export class HeaderConnector extends Component {
    render() {
        return (
            <Fragment>
                <div className='relative font-bold font-serif place-items-center '>
                    <img className='relative z-0' src={ imgHeader } alt=''/>
                    <div className='absolute z-10 text-2xl bottom-5 left-6 text-coolGray-400'>
                        <h1 className='text-5xl text-yellow-500'>Kamil Bobrowski</h1>
                        <img className='absolute z-10 top-0 -right-1/4 h-11' src={ flag } alt='' />
                        <h2 className='font-mono'>Engineer / Artist / Combinator</h2>
                    </div>
                </div>
                <div className='flex place-content-center h-16 m-20'>
                    <div className='justify-center italic font-normal text-xl'>
                        <div className=''>"{ Data[8].quort }"</div>
                        <div className='flex justify-center mt-2'> - { Data[8].author } </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}