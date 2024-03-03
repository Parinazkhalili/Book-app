import React from 'react' ;
import styles from "./Layout.module.css"


function Layout({children}) {
    return (
       <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p><a href="#"> Learning</a> | React.js</p>
        </header>
        {children}
        <footer  className={styles.footer}> <p>Developed by Parinaz</p></footer>
       </> 
    )
}

export default Layout