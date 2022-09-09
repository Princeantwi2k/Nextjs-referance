import React from 'react'
import styles from "../../styles/Home.module.css"
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
function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>Daylight</h2>
      </div>
    
      <div className={styles.wrapper}>
				<ul>
					<li>
					<Dashboard width={18} />
						<a href="#">Dashboard</a>
					</li>
					<li>
          <FontAwesomeIcon
							icon={faUser}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					
            
						<a href="#">User Profile</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faTable}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Table List</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faIcons}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Icons</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faMapMarked}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#"> Maps</a>
					</li>
					
					<li>
						<FontAwesomeIcon
							icon={faBell}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#"> Notifications</a>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Logout</a>
					</li>
				</ul>
      </div>
    </div>
  )
}

export default LeftNavbar;