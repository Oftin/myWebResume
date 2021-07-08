import React, { Component, Fragment } from 'react';
import WebSettings from '../data/webSettings.json';
import { HeaderConnector } from '../header/HeaderConnector';
import { MainConnector } from '../main/MainConnector';
import { FooterConnector } from '../footer/FooterConnector';

export class WebConnector extends Component {
    render() {
        return (
            <Fragment>
                <div className={ WebSettings[0].settingMainWebSite }>
                    <div className={ WebSettings[0].fontOnSite }>
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