import React from "react";
import styles from "../../styles/Home.module.css";
import { Dashboard, Search } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>Prince</span>
					</h2>
					<p>welcome to the board.</p>
				</div>
				<div className={styles.profile}>
					<input type="text"  placeholder="Search" className={styles.input}/>
                      <Search width={10} className={styles.ProfileSearch}/>
					  <Dashboard width={10} />
					  <FontAwesomeIcon icon={faBell} width={10} />
					  <FontAwesomeIcon icon={faUser} width={10} />

				</div>
			</div>
		</div>
	);
}

export default Header;