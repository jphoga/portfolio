import React from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.scss";

const iconStyle = {
  color: '#007acc',
  fontSize: '5rem',
  margin: '8px'
};


class Navbar extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Link style={{ boxShadow: `none` }} to={'/'}>
          <i style={iconStyle} className="fas fa-meteor"></i>
        </Link>
        <ul className={styles.headerMenu}>
          {this.props.headerProps.map(item => (
            <li key={item.link}>
              <Link style={{ boxShadow: `none` }} to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Navbar;