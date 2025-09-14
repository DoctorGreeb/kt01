import styles from './Article2.module.css';
export default function Article2(props) {
    return (
        <section className={styles.article}>
            <div className={styles.articleLeft}>
                <div className={styles.articleText}>
                    <div className={styles.articleDescription}>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            <div className={styles.articleCenter}>
                <div className={styles.articleText}>
                    <div className={styles.articleDescription}>
                        <p>{props.text2}</p>

                    </div>
                </div>
            </div>
            <div className={styles.articleRight}>
                <div className={styles.articleText}>
                    <div className={styles.articleDescription}>
                        <p>{props.text3}</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}