import React from 'react'
import styles from "../styles/Tables.module.css"

function RightTable() {
  return (
    <div className={styles.table}>
      <p scope="col" className={styles.tablelight}>Employees Stats<br /> <span>New employees on 15th September, 2016</span> </p>
      <table >
  <thead >
  <th className={styles.tablehead}>ID</th>
  <th className={styles.tablehead1}>Name</th>
  <th className={styles.tablehead1}>Salary</th>
  <th className={styles.tablehead1}>Country</th>
      

  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td className={styles.tablebody}>Dakota Rice</td>
      <td className={styles.tablebody}>$36,738</td>
      <td className={styles.tablebody}>	Niger</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td className={styles.tablebody}>Minerva Hooper</td>
      <td className={styles.tablebody}>$23,789</td>
      <td className={styles.tablebody}>Curaçao</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td className={styles.tablebody}>Bill Zak</td>
      <td className={styles.tablebody}>$23,789</td>
      <td className={styles.tablebody}>Ghana</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td className={styles.tablebody}>Prinve Antwi</td>
      <td className={styles.tablebody}>$103,789</td>
      <td className={styles.tablebody}>Ghana</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default RightTable