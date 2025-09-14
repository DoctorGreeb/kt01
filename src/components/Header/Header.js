import styles from './header.module.css';
export default function Header(props) {
  const handleLogoClick = () => {
    // Простой переход на главную страницу
    window.location.href = '/';
  };
  return (
    <header className={styles.mainHeader}>
      <div className={styles.header}>
        <img 
          src="./logo copy 1.svg" 
          alt="Logo" 
          className={styles.logo}
          onClick={handleLogoClick}
        />
      <div className={styles.midButtons}>
        <div className={styles.buttons}>
          <button>{props.text1}</button>
          <button>{props.text2}</button>
          <button>{props.text3}</button>
        </div>
      </div>
      <div className={styles.rightButtons}>
        <button>{props.text4}</button>
      </div>
      </div>
    </header >
  );
  
}