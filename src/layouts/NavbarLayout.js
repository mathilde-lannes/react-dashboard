import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './Layout.scss'


export default function NavbarLayout ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Navbar color="dark" />
                
                <div id="content">
                    <MatchedPage {...matchProps} />
                </div>
            </div>
        )} />
    )
};