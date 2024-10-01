// import transactions from '../../transactions.json'
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => { 
    return (
    <table className={styles.table}>
        <thead className={styles.header}>
            <tr>
                <th className={styles.names}>Type</th>
                <th className={styles.names}>Amount</th>
                <th className={styles.names}>Currency</th>
            </tr>
        </thead>
        
        <tbody>
            { items.map(({ id, type, amount, currency }) => {
            return (
                <tr className={styles.lines} key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )
            })}
        </tbody>
    </table>
    )
            
}

export default TransactionHistory