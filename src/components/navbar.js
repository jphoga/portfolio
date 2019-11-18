import React from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.scss";


class Navbar extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        
        <ul className={styles.headerMenu}>
          {this.props.headerProps.map(item => (
            <li key={item.link}>
              <Link style={{ boxShadow: `none` }} to={item.link} activeClassName={styles.currentPage}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Link style={{ boxShadow: `none` }} className={styles.iconStyle} to={'/'}>
          <i className="fas fa-meteor"></i>
        </Link> */}
      </header>
    );
  }
}

export default Navbar;