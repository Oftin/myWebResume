import React, { Component, Fragment } from 'react';
import { HeaderConnector } from '../header/HeaderConnector';
import { MainConnector } from '../main/MainConnector';
import { FooterConnector } from '../footer/FooterConnector';

export class WebConnector extends Component {
    render() {
        return (
            <Fragment>
                <div className='min-h-screen flex items-center'>
                    <div className='flex-1 max-w-6xl mx-auto shadow-2xl space-y-20'>
                        <header className='p-2'>
                            <HeaderConnector />
                        </header>
                        <main className='px-10'>
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