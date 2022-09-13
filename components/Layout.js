import React from 'react'
import styles from "../styles/Home.module.css"
import LeftNavbar from './LeftNavbar'


function Layout({children}) {
  return (
    <>
    <LeftNavbar />
    <div className={styles.container}>
        <main className={styles.main}></main>{children}
    </div>
    </>
  )
}

export default Layout