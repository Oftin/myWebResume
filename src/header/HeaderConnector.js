import React, { Component, Fragment } from 'react';
import imgHeader from '../img/vulcanSicilia_FHD.jpg';
import flag from '../img/flag_FHD.jpg';
import Data from '../../src/data/data.json';

export class HeaderConnector extends Component {
    render() {
        return (
            <Fragment>
                <div className='relative font-bold font-serif place-items-center '>
                    <img className='relative z-0 w-screen' src={ imgHeader } alt=''/>
                    <div className='absolute z-10 text-2xl bottom-5 left-6 text-coolGray-400'>
                        <h1 className='text-4xl md:text-5xl ld:text-5xl text-yellow-500'>Kamil Bobrowski</h1>
                        <img className='absolute z-10 top-0 -right-1/4 h-11' src={ flag } alt='' />
                        <div className='font-mono text-xl md:text-2xl ld:text-2xl '>Engineer / Artist / Combinator</div>
                    </div>
                </div>
                <div className='flex place-content-center h-16 m-16 md:m-18 ld:m-20'>
                    <div className='justify-center italic font-normal text-xl'>
                        <div className=''>"{ Data[8].quort }"</div>
                        <div className='flex justify-center mt-2 md:mt-2 ld:mt-2'> - { Data[8].author } </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}