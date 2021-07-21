import React, { Component, Fragment } from 'react';
import { HeaderConnector } from '../header/HeaderConnector';
import { MainConnector } from '../main/MainConnector';
import { FooterConnector } from '../footer/FooterConnector';

export class WebConnector extends Component {
    render() {
        return (
            <Fragment>
                <div className='min-h-screen flex items-center overflow-hidden'>
                    <div className='flex-1 lg:max-w-6xl mx-auto lg:shadow-2xl space-y-20'>
                        <header className='lg:p-2'>
                            <HeaderConnector />
                        </header>
                        <main className='p-4 sm:p-10'>
                            <MainConnector />
                        </main>
                        <footer>
                            <FooterConnector />
                        </footer>
                    </div>
                </div>
            </Fragment>
        )
    }
}