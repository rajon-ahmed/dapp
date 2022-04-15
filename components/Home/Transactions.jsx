import React from 'react';
import styles from '../../styles/Home.module.scss'

const Transactions = () => {
    return (
        <div className={styles.form}>
            <div>
                <h2>Send Balance</h2>
                <form action="">
                    <input placeholder="Address To" type="text" value="" />
                    <input placeholder="Amount (ETH)" type="number" value="" />
                    <input placeholder="Keyword (Gif)" type="text" value="" />
                    <input placeholder="Enter Message" type="text" value="" /> <br />
                    <button type="button" className={styles.button}>Send Balance</button>
                </form>
            </div>
            <div>
                <h2>Deposit Money</h2>
                <form action="">
                    <input placeholder="Address To" type="text" value="" />
                    <input placeholder="Amount (ETH)" type="number" value="" />
                    <input placeholder="Keyword (Gif)" type="text" value="" /> <br />
                    <button  type="submit" className={styles.button}>Deposit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Transactions