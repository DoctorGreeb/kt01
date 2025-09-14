import styles from './header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo192.png" alt="Logo" className={styles.logo} />
      <div className={styles.midButtons}>
        <div className={styles.buttons}>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
      <div className={styles.rightButtons}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header >
  );
}