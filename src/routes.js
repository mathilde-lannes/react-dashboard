import React from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'

import NavbarLayout from './layouts/NavbarLayout'
import SidebarLayout from './layouts/SidebarLayout'
import NavbarSidebarLayout from './layouts/NavbarSidebarLayout'
import TwoPanelsLayout from './layouts/TwoPanelsLayout'

import PlaceholderPage from './placeholders/Placeholder'
import ScrollPlaceholderPage from './placeholders/ScrollPlaceholder'


export default function MainRouter() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Redirect exact from="/" to="/home" />

                <NavbarSidebarLayout path="/home" component={PlaceholderPage} />
                <NavbarSidebarLayout path="/data" component={PlaceholderPage} />
                <NavbarSidebarLayout path="/dashboard" component={PlaceholderPage} />
                <NavbarSidebarLayout path="/analytics" component={ScrollPlaceholderPage} />

                <NavbarLayout path="/navbar" component={PlaceholderPage} />
                <SidebarLayout path="/sidebar" component={PlaceholderPage} />
                <TwoPanelsLayout path="/two-panels" component={PlaceholderPage} />
            </Switch>
        </Router>
    )
}