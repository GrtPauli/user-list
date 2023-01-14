import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'

class Navbar extends Component {
    render() { 
        return (
            <nav>
                <div className="logo">
                <Image width={100} height={77} src="/logo.jpg"/>
            </div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/users'>User Listing</Link>
            </nav>            
        );
    }
}
 
export default Navbar;