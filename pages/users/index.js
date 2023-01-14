import React from 'react';
import styles from '../../styles/Users.module.css'
import Link from 'next/link'

export const getStaticProps = async () =>
{
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()

    return {
        props: {
            users: data
        }
    }
}

const Users = ({users}) => {
    return (
        <div className="users-listing">
        <h1>Users Listing</h1>
        {
            users.map(user => (
                <Link className={styles.single} href={'/users/' + user.id} key={user.id}>
                        <h3>{ user.name }</h3>
                </Link>
            ))
        }
        </div>
      );
}
 
export default Users;