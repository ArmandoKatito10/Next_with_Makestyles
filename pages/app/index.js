import React from 'react'
import Head from 'next/dist/next-server/lib/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function App(){
    return(
        <div className={styles.hello}>
            <p>Hello world Again!</p>
            <a href="../">Back home</a>
        </div>

        )

}