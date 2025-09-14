import styles from './footer.module.css';
export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentFooter}>
        <div className={styles.footerLeft}>
          <img src="./sales.png" alt="Footer" />
        </div>
        <div className={styles.footerRight}>
          <p>{props.text}</p>
          <p>{props.text2}</p>
        </div>
      </div>


    </footer>
  );
}