import React, { Component } from 'react'
import Footer from './footer';
import Navbar from './navbar';

class Layout extends Component {

    render() { 
        return (
            <div className="content">
                <Navbar/>
                { this.props.children }
                <Footer/>
            </div>
        );
    }
}
 
export default Layout;