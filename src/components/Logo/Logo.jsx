import styles from "./Logo.module.css";
import LogoImg from "./sticky-logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="master-logo-name">
      <Link to='/'>
        <img className={styles.logo} src={LogoImg} alt="" />
      </Link>
      
    </div>
  );
}
