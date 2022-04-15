import React from 'react';
import styles from '../../styles/Home.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div>
                <h2>Send Crypto <br /> across the world</h2>
                <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</p>
                <button>Connect Wallet</button>
            </div>
            <div>
                <div className={styles.account}>
                    <h4>Name: Rajon Ahmed </h4>
                    <p>Balance: Ethereum $ 560.55558 </p>
                </div>
            </div>
        </div>
    )
}

export default Banner