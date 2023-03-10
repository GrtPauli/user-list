import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const NotFound = () => {

    const router = useRouter()
    useEffect(() =>
    {
        setTimeout(() => 
        {
            router.push('/')
        }, 3000)

    }, [])

    return (
        <div className="not-found">
        <h1>OOPS....</h1>
        <h2>That Page Cannot Be Found</h2>
        <p>Go Back To The <Link href='/'>Home Page</Link></p>
        </div>
      );
}
 
export default NotFound;
 