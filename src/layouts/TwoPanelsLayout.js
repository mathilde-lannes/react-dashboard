import React from 'react'
import { Route } from 'react-router-dom'
import Panel from './components/Panel'
import './Layout.scss'


export default function NavbarLayout ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Panel />

                <div id="content-next-to-panel">
                    <MatchedPage {...matchProps} />
                </div>

            </div>
        )} />
    )
};