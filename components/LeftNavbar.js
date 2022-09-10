import React from 'react'
import styles from "../styles/Navbar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Dashboard } from '@material-ui/icons';
import {
  faIcons,
  faUser,
	faSignOutAlt,
	faTachometerAlt,
  faBell,
  faMapMarked,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


function LeftNavbar({children}) {
  return (
    <nav className={styles.navcontainer} >
      <div className={styles.logo}>
        <h2>Daylight</h2>
      </div>
    
      <div className={styles.wrapper}>
				<ul>
					<li>
					<Dashboard width={18} /><Link href="/">
						Dashboard
						</Link>
					</li>
					<li>	
                       <FontAwesomeIcon
							icon={faUser}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					<Link href="/user">	User Profile</Link>
					</li>
					<li>
						
						<FontAwesomeIcon
							icon={faTable}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					
					 <Link href='/table'>Table List</Link>	
						
					</li>
					<li>
						<FontAwesomeIcon
							icon={faIcons}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					 <Link href="/icon">Icons</Link>	
					</li>
					<li>
						<FontAwesomeIcon
							icon={faMapMarked}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="/maps">Maps</Link>
						
					</li>
					
					<li>
						<FontAwesomeIcon
							icon={faBell}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					<Link href="/notification"> Notifications</Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					  <Link href="/logout">Logout</Link>	
					</li>
				</ul>
      </div>
	
    </nav>
  )
}

export default LeftNavbar;