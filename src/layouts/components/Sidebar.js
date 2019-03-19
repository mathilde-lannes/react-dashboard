import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaHome, FaDatabase, FaChartLine, FaDashcube } from 'react-icons/fa'

export default class Sidebar extends React.Component {

    render () {
        const { location, history } = this.props
        return (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                    onToggle={this.props.onToggle}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected={location.pathname.substr(1)}>
                        <NavItem eventKey="home">
                            <NavIcon>
                                <FaHome size={25} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="data">
                            <NavIcon>
                                <FaDatabase size={25} />
                            </NavIcon>
                            <NavText>
                                Data
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="dashboard">
                            <NavIcon>
                                <FaDashcube size={25} />
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="analytics">
                            <NavIcon>
                                <FaChartLine size={25} />
                            </NavIcon>
                            <NavText>
                                Analytics
                            </NavText>

                            <NavItem eventKey="analytics/statistics">
                                <NavText>
                                    Statistics
                                </NavText>
                            </NavItem>
                        </NavItem>

                    </SideNav.Nav>
                </SideNav>
            </React.Fragment>
        )
    }

};