import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Home = () => {
  return (
      <>
      <Head>
          <title>Users List | Home</title>
          <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt eos voluptatem hic. Quaerat voluptate ex exercitationem voluptatem sed fuga rem, sequi repudiandae necessitatibus recusandae dolore perferendis voluptas animi est doloribus corrupti repellat adipisci ad consequatur vel. Nisi vel ab eum, doloribus autem, libero minima, inventore iusto ipsum facilis assumenda.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt eos voluptatem hic. Quaerat voluptate ex exercitationem voluptatem sed fuga rem, sequi repudiandae necessitatibus recusandae dolore perferendis voluptas animi est doloribus corrupti repellat adipisci ad consequatur vel. Nisi vel ab eum, doloribus autem, libero minima, inventore iusto ipsum facilis assumenda.</p>
        
        <Link className={styles.btn} href='/users'>See Users Listing</Link>
      </div>
      </>
    );
}
 
export default Home;
