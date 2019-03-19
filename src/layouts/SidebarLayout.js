import React from 'react';
import { Route } from 'react-router-dom';
import '../_variables.scss';
import './Layout.scss'

import Sidebar from './components/Sidebar'

export default class NavbarSidebarLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    toggleDrawer = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render () {
        const {component: MatchedPage, ...rest} = this.props;
        
        return (
            <Route {...rest} render={({location, history, ...props}) => (
                <div id="sidebar-navbar-layout">
                    <Sidebar location={location} history={history}
                        onToggle={_ => this.toggleDrawer()}
                    />

                    <main className={ this.state.expanded ? 'next-to-sidebar expanded' : 'next-to-sidebar not-expanded' }>
                        <MatchedPage {...props} />
                    </main>
                </div>
    
            )} />
        );
    }
}
