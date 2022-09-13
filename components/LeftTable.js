import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "../styles/Tables.module.css"
import { faBug, faCloud, faGreaterThan, faLessThan, faPen ,faXmark} from '@fortawesome/free-solid-svg-icons'

function LeftTable() {
  return (
    <div className={styles.Lefttable}>
      <div className={styles.Lefttablelight}>
        <div className={styles.LeftTableHeader}>
          <p>Tasks : </p>
          <ul>
            <li> <FontAwesomeIcon icon={faBug} width={15} />  <span>Bugs</span></li>
            <li><FontAwesomeIcon icon={faLessThan} width={11} /> <FontAwesomeIcon icon={faGreaterThan} width={11} />  Websites</li>
            <li><FontAwesomeIcon icon={faCloud} width={15} />Server</li>
          </ul>
        </div>
      
      
      </div>
      
      <table >
  <thead >

      

  </thead>
  <tbody>
  <tr>
      <th scope="row"><input type="checkbox" /></th>
      <td className={styles.Lefttablebody}>Sign contract for "What are conference organizers afraid of?"</td>
      
      <td className={styles.tablebodyIcon}>	<FontAwesomeIcon icon={faPen} width={13}  /> <span> <FontAwesomeIcon icon={faXmark} width={13} /></span></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox" /></th>
      <td className={styles.Lefttablebody}>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
      
      <td className={styles.tablebodyIcon}>	<FontAwesomeIcon icon={faPen} width={13}  /> <span> <FontAwesomeIcon icon={faXmark} width={13} /></span></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox" /></th>
      <td className={styles.Lefttablebody}>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>
     
      <td className={styles.tablebodyIcon}> <FontAwesomeIcon icon={faPen} width={13}  /> <span> <FontAwesomeIcon icon={faXmark} width={13} /></span></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox" /></th>
      <td className={styles.Lefttablebody}>Create 4 Invisible User Experiences you Never Knew About</td>
      <td className={styles.tablebodyIcon}> <FontAwesomeIcon icon={faPen} width={13}  /> <span> <FontAwesomeIcon icon={faXmark} width={13} /></span></td>
    
     
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default LeftTable