import styles from './Logo.module.css';
import LogoImg from './logoImg.png'

export default function Logo() {
return (
  <div >
    <div className='logo-div'></div>
    <img className={styles.logo} 
    src={LogoImg} alt="" />
  </div>
);
}